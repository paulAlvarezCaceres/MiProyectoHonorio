import React from 'react'
import cabeza from '../assets/img/encabezadoDos.png';
//import desarrollo from './src/img/desarrollo.png'

const Header = () => {
	return (
		<div>
		<div class="container-fluid bg-dark d-flex justify-content-center">
			<p class="text-light mb-0 p-2 fs-6">Contactanos (54)-934204624</p>
		</div>

		<img src={cabeza} width="100%" height="200"/>

		</div>
	)
}

export default Header