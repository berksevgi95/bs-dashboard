import React from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';

import Article from '../../components/article/Article';
import Header from '../../components/header/Header';
import Panel from '../../components/panel/Panel';
import Datalist from '../../components/datalist/Datalist';
import Graph from '../../components/Graph/Graph';

import topChart from '../../assets/dataset/topChart.json'
import appSuggestions from '../../assets/dataset/appSuggestions.json'
import trackedApps from '../../assets/dataset/trackedApps.json'

import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {

	return (
		<Article>
			<Header>
				<h1>Dashboard</h1>
			</Header>
			<div className="flex-1 overflow-auto">
			<ResponsiveGridLayout
				className="layout"
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
				rowHeight={75}
				draggableHandle=".title"
			>
				<Panel title="Top Charts" key="1" data-grid={{ w: 3, h: 5, x: 0, y: 0, minW: 2, minH: 3 }}>
					<Datalist data={topChart} />
				</Panel>
				<Panel title="Tracked Apps" key="2" data-grid={{ w: 3, h: 5, x: 3, y: 0, minW: 2, minH: 3 }}>
					<Datalist data={trackedApps} />
				</Panel>
				<Panel title="App Suggestions" key="3" data-grid={{ w: 3, h: 5, x: 0, y: 0, minW: 2, minH: 3 }}>
					<Datalist data={appSuggestions} />
				</Panel>
				<Panel title="Rank History" key="4" data-grid={{ w: 3, h: 5, x: 3, y: 0, minW: 2, minH: 3 }}>
					<Graph data={topChart} />
				</Panel>
			</ResponsiveGridLayout>
			</div>
		</Article>
	)
}

export default Dashboard;