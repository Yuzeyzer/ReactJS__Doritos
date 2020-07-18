import React from 'react';

import rings from '../../assets/rings.png'

function hero() {
	return (
		<section className="hero">
			<img className="hero__rings" src={rings} alt="rings"/>
			<div className="container">
			</div>
		</section>
	)
}

export default hero
