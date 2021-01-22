import React from 'react';

import bowMasterMultiplayerGameIcon from '../../assets/appIcons/bowMaster-multiplayerGameIcon.jpg'
import driveClimberIcon from '../../assets/appIcons/driveClimberIcon.jpg'
import facebookMessengerIcon from '../../assets/appIcons/facebookMessengerIcon.jpg'

import './styles.css'

const Icon = ({
	iconName
}) => {
	switch (iconName) {
		case "facebookMessengerIcon.jpg":
			return (
				<img className="icon" src={facebookMessengerIcon} />
			)
		case "driveClimberIcon.jpg":
			return (
				<img className="icon" src={driveClimberIcon} />
			)
		case "bowMaster-multiplayerGameIcon.jpg":
			return (
				<img className="icon" src={bowMasterMultiplayerGameIcon} />
			)
		default:
			return (
				<img className="icon" alt="Not Found" />
			)
	}
	
}

export default Icon;