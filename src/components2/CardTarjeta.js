import React from 'react'
import carta from '../assets/img/card.jpg';

const CardTarjeta = () => {
	return (
		<div>
<div className="card" style={{width: '18rem'}}>
  <img src={carta} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Bonitos diseños</h5>
    <p className="card-text">Empezarás conociendo tu máquina de coser, los controles básicos y cada uno de los accesorios que suelen traer.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>		
			
		</div>
	)
}

export default CardTarjeta