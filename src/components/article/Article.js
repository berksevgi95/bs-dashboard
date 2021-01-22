import React from 'react';

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