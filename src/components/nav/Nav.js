import React from 'react';
import {
    Link, withRouter
} from "react-router-dom";
import Logo from '../../assets/dashboardImages/logo.png'
import DashboardMenuIcon from '../../assets/dashboardImages/dashboardMenuIcon.png'

import './styles.css'

const Sidebar = ({
	location,
	...props
}) => {
	return (
		<nav className="nav flex flex-col justify-start items-center">
			<Link to="/">
				<img className="img" src={Logo}></img>
			</Link>
			<Link to="/dashboard" className={`px-8 py-4 flex ${location.pathname === '/dashboard' ? 'selected' : ''}`}>
				<img className="menu-icon" src={DashboardMenuIcon}></img>
				{location.pathname === '/dashboard' && (
					<div className="absolute right-0 pr-4">
						<i className="arrow right border-white"></i>
					</div>
				)}
			</Link>
		</nav>
	)
}

export default withRouter(Sidebar);