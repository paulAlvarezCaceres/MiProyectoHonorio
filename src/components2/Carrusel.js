import React from 'react'
import carru1 from '../assets/img/carruselU.jpg';
import carru2 from '../assets/img/carruselD.jpg';
import carru3 from '../assets/img/carruselT.jpg';

const Carrusel = () => {
	return (
		<div className="my-3">
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={carru1} width="100%" height="60%" className="d-block w-100" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={carru2} width="100%" height="60%" className="d-block w-100" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={carru3} width="100%" height="60%" className="d-block w-100" alt="..."/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>		
			La costura parece un arte lleno de secretos, pero la realidad es que es accesible para todos los que tienen paciencia, motivación y cuidado por los detalles.
		</div>
	)
}

export default Carrusel