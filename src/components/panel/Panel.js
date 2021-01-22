import React from 'react';

import './styles.css'

const Panel = ({
	children,
	className,
	title,
	...props
}) => {
	return (
		<div className={`panel ${className}`} {...props}>
			{title && (
				<div>
					<h3 className="title">{title}</h3>
					<div className="title-border"/>
				</div>
			)}
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default Panel;