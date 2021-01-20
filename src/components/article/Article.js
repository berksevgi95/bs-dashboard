import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/dashboardImages/logo.png'

const Sidebar = ({
	children,
}) => {
	return (
		<article className="flex flex-col flex-1">
			{children}
		</article>
	)
}

export default Sidebar;