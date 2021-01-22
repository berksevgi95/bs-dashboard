import React from 'react';
import { Chart } from 'chart.js'
import moment from 'moment'

const Graph = ({
	data
}) => {

	const canvasRef = React.useRef()

	React.useEffect(() => {

		const colorArr = [
			'#4D4DFF',
			'#3655B3',
			'#884DFF',
			'#4DFFFF',
			'#D3DEFF',
			'#A6BCFF',
			'#07676B',
			'#6B00FF',
			'#7C92EA',
			'#C440E5'
		]

		const graphData = {}

		data.forEach(d => {
			d.apps.forEach(app => {
				if (!graphData[app.name + '#' + app.id])
					graphData[app.name + '#' + app.id] = []
				graphData[app.name + '#' + app.id].push(app.rank)
			})
		});

		new Chart(canvasRef.current.getContext('2d'), {
			type: 'line',
			data: {
				labels: data.map(d => moment(d.date).format('Do MMM')),
				datasets: Object.keys(graphData).map((app, index) => ({
					label: app.split('#')[0],
					data: graphData[app],
					borderColor: colorArr[index],
					backgroundColor: 'transparent',
					pointBorderColor: 'transparent',
					hoverBorderColor: colorArr[index],
					hoverRadius: 10,
					hoverBackgroundColor: 'white',
					hoverBorderWidth: 5
				})),
			},
			options: {
				layout: {
					padding: {
						top: 20
					}
				},
				legend: {
					display: false
				},
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true,
							display: false
						},
						display: true,
						gridLines: {
							zeroLineWidth: 0,
							color: 'transparent',
						}
					}]
				},
				tooltips: {
					callbacks: {
						title: function(tooltipItem, data) {
							return data.datasets[tooltipItem[0].datasetIndex].label
						},
						label: function(tooltipItem) {
							return tooltipItem.xLabel + ' - ' + tooltipItem.yLabel
						},
					},
					backgroundColor: '#FFF',
					titleFontSize: 15,
					titleFontColor: '#000',
					bodyFontColor: '#000',
					bodyFontSize: 14,
					displayColors: false,
					bodyFontFamily: "'Nunito', sans-serif",
					titleFontFamily: "'Nunito', sans-serif"
				  }
			},
		});
	}, [])

	return (
		<canvas ref={canvasRef} />
	)
}

export default Graph;