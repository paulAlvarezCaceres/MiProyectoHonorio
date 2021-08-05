import React from 'react'
import gato from '../assets/img/gatoLurigancho.jpg';

const PiePag = () => {
	return (
		<div>
		<footer class="page-footer bg-dark text-light">

		<div class="container text-center text-md-left mt-0 my-0">
			<div class="row">
				<div class="col-md-3 mx-auto mb-4 my-5">
					<h6 class="text-uppercase font-weight-bold text-warning">Proveedores</h6>
					<hr class="badge-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '125px', height: '2px'}}/>
					<p class="mt-2">Los gatos negros de Lurigancho</p>
					<a class="navbar-brand" href="#"><img src={gato} class="logo2" style={{width: '150px', height: '150px'}}/></a>
				</div>

				<div class="col-md-2 mx-auto mb-4 my-5">
					<h6 class="text-uppercase font-weight-bold text-warning">Productos</h6>
					<hr class="badge-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '85px', height: '2px'}}/>
					<ul class="list-unstyled">
						<li class="my-2"><a href="#"></a>Producto1</li>
						<li class="my-2"><a href="#"></a>Producto2</li>
						<li class="my-2"><a href="#"></a>Producto3</li>
						<li class="my-2"><a href="#"></a>Producto4</li>
					</ul>
				</div>

				<div class="col-md-2 mx-auto mb-4 my-5">
					<h6 class="text-uppercase font-weight-bold text-warning">Enlaces útiles</h6>
					<hr class="badge-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '110px', height: '2px'}}/>
					<ul class="list-unstyled">
						<li class="my-2"><a href="#"></a>Casa</li>
						<li class="my-2"><a href="#"></a>Acerca de </li>
						<li class="my-2"><a href="#"></a>Servicios</li>
						<li class="my-2"><a href="#"></a>Contactos</li>
					</ul>					
				</div>

				<div class="col-md-3 mx-auto mb-4 my-5">
					<h6 class="text-uppercase font-weight-bold text-warning">Contactos</h6>
					<hr class="badge-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '75px', height: '2px'}}/>
					<ul class="list-unstyled">
						<li class="my-2"><i class="fas fa-home mr-3"></i>La Libertad, Jirón Abancay 101</li>
						<li class="my-2"><i class="fas fa-envelope mr-3"></i>ejemplo@gmail.com</li>
						<li class="my-2"><i class="fas fa-phone mr-3"></i>+54959862123</li>
						<li class="my-2"><i class="fas fa-print mr-3"></i>+000000000001</li>
					</ul>					
				</div>

			</div>
		</div>

		<div class="footer-copyright text-center py-3">
			<p class="text-warning">&copy; Copyright
				<a href="#">gatolunar.com</a></p>
				<p class="text-warning">diseñado por Richard Paul</p>
		</div>
	</footer>
	</div>
	)
}

export default PiePag