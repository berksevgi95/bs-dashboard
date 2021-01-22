import React from 'react';
import Icon from '../icon/Icon';
import Flag from 'react-flagkit';
import Star from '../Star/Star';

import './styles.css'

const Datalist = ({
	data
}) => {

	const calculateData = () => {
		const lastData = data[data.length - 1]
		const previousData = data[data.length - 2]
		const newData = []

		lastData.apps.forEach((app, index) => {
			newData.push({
				...app,
				progress: app.rank - previousData.apps[index].rank
			})
		});
		return newData
	}

	const rawData = data.find(d => d.date) ? calculateData() : data

	return (
		<ol>
			{rawData && rawData.length > 0 && rawData.map((app, index) => (
				<li className="flex py-3 items-center justify-between" key={app.id}>
					<div className="flex items-center">
						<p className="mr-2">
							{index + 1}
						</p>
						<Icon iconName={app.iconname} />
						<div>
							<p>{app.name}</p>
							<div className="flex items-center">
								<Flag
									className="flag mr-2"
									country={app.country === 'UK' ? 'GB': app.country}
								/>
								<span className="text-xs text-gray-500 mr-2">
									{app.publisher}
								</span>
								<Star className="mr-2" rank={app.rank} />
								<span className="text-xs text-gray-500 mr-2">
									(1.234)
								</span>
							</div>
						</div>
					</div>
					<div className={`progress`}>
						<span className={`${app.progress === 0 ? 'pfixed' : app.progress > 0 ? 'pup' : 'pdown' }`}>
							{app.progress}
						</span>
					</div>
				</li>
			))}
		</ol>
	)
}

export default Datalist;