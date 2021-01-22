import React from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';

import Article from '../../components/article/Article';
import Header from '../../components/header/Header';
import Panel from '../../components/panel/Panel';
import Datalist from '../../components/datalist/Datalist';
import Graph from '../../components/graph/Graph';

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
					rowHeight={75}
					draggableHandle=".title"
					layouts={{
						"lg": [
							{ w: 6, h: 5, x: 0, y: 0, minW: 2, minH: 3, i: 'top-charts' },
							{ w: 6, h: 5, x: 6, y: 0, minW: 2, minH: 3, i: 'tracked-apps'},
							{ w: 6, h: 5, x: 0, y: 5, minW: 2, minH: 3, i: 'app-suggestions'},
							{ w: 6, h: 5, x: 6, y: 5, minW: 2, minH: 3, i: 'rank-history'}
						],
						"md": [
							{ w: 5, h: 5, x: 0, y: 0, minW: 2, minH: 3, i: 'top-charts' },
							{ w: 5, h: 5, x: 5, y: 0, minW: 2, minH: 3, i: 'tracked-apps'},
							{ w: 5, h: 5, x: 0, y: 5, minW: 2, minH: 3, i: 'app-suggestions'},
							{ w: 5, h: 5, x: 5, y: 5, minW: 2, minH: 3, i: 'rank-history'}
						],
						"sm": [
							{ w: 6, h: 5, x: 0, y: 0, minW: 2, minH: 3, i: 'top-charts' },
							{ w: 6, h: 5, x: 5, y: 5, minW: 2, minH: 3, i: 'tracked-apps'},
							{ w: 6, h: 5, x: 0, y: 10, minW: 2, minH: 3, i: 'app-suggestions'},
							{ w: 6, h: 5, x: 5, y: 15, minW: 2, minH: 3, i: 'rank-history'}
						],
					}}
				>
					<Panel title="Top Charts" key="top-charts">
						<Datalist data={topChart} />
					</Panel>
					<Panel title="Tracked Apps" key="tracked-apps">
						<Datalist data={trackedApps} />
					</Panel>
					<Panel title="App Suggestions" key="app-suggestions">
						<Datalist data={appSuggestions} />
					</Panel>
					<Panel title="Rank History" key="rank-history">
						<Graph data={topChart} />
					</Panel>
				</ResponsiveGridLayout>
			</div>
		</Article>
	)
}

export default Dashboard;