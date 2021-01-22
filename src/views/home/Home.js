import React from 'react';

import Article from '../../components/article/Article';
import Header from '../../components/header/Header';

const Home = () => {
	return (
		<Article>
			<Header>
				<h1>Home</h1>
			</Header>
			<div className="flex-1 p-5">
				<h3>
					<i className="arrow border-black left mr-3"></i>
					To continue, click Dashboard button
				</h3>
			</div>
		</Article>
	)
}

export default Home;