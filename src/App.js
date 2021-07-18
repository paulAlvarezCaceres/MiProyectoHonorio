import Header from './components2/Header.js';
import MenuNav from './components2/MenuNav.js';
import Carrusel from './components2/Carrusel.js';
import Aside from './components2/Aside.js';
import CardTarjeta from './components2/CardTarjeta.js';
//import MapaUbic from './components2/MapaUbic.js';
//import VideoPeli from './components2/VideoPeli.js';
//import PiePag from './components2/PiePag.js';

function App() {
  return (
  	<div className="container px-2">

  	<header className="row bg-secondary mx-1">
  		<Header />
  	</header>

  	<nav className="row bg danger">
  		<MenuNav />
  	</nav>

  	<section className="row bg-primary mx-1">
  		<article className="col-md-6 bg-warning">
  			<Carrusel />
  		</article>

  		<aside className="col-md-3 bg-primary">
  			<Aside />
  		</aside>

   		<article className="col-md-3 d-flex justify-content-center bg-secondary">
  			<CardTarjeta />
  		</article>
  	</section>

    </div>

  );
}

export default App;
