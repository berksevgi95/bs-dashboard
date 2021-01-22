import React from 'react';
import {
    Link
} from "react-router-dom";
import Logo from '../../assets/dashboardImages/logo.png'
import DashboardMenuIcon from '../../assets/dashboardImages/dashboardMenuIcon.png'

import './styles.css'

const Sidebar = () => {
	return (
		<nav className="nav">
			<Link to="/">
				<img className="img" src={Logo}></img>
			</Link>
			<Link to="/dashboard" className="menu-item">
				<img className="menu-icon" src={DashboardMenuIcon}></img>
			</Link>
		</nav>
	)
}

export default Sidebar;