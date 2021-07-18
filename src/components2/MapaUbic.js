import React from 'react';
import GoogleMaps from "simple-react-google-maps";

const MapaUbic = () => {
	return (
		<div>
				<div className="container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.9941277681303!2d-71.56787525094413!3d-16.37456066455122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a08b7e032a3%3A0x1e08bf8da242435d!2sAbancay%20101%2C%20Cerro%20Colorado%2004014!5e0!3m2!1ses!2spe!4v1624839889526!5m2!1ses!2spe" 
					width="100%" height="400" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
				</div>			
		</div>
	)
}

export default MapaUbic