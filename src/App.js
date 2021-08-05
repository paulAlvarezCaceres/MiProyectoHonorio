import Header from './components2/Header.js';
import MenuNav from './components2/MenuNav.js';
import Carrusel from './components2/Carrusel.js';
import Aside from './components2/Aside.js';
import CardTarjeta from './components2/CardTarjeta.js';
import MapaUbic from './components2/MapaUbic.js';
import VideoPeli from './components2/VideoPeli.js';
import Descrip from './components2/Descrip.js';
import PiePag from './components2/PiePag.js';


function App() {
  return (
  	<div className="container px-2">

  	<header className="row bg-dark mx-0">
  		<Header />
  	</header>

  	<nav className="row bg danger">
  		<MenuNav />
  	</nav>

  	<section className="row bg-primary mx-0">

  		<article className="col-md-6 bg-warning">
  			<Carrusel />
  		</article>

  		<aside className="col-md-3 bg-primary my-4">
  			<Aside />
  		</aside>

   		<article className="col-md-3 d-flex justify-content-center bg-primary">
  			<CardTarjeta />
  		</article>

  	</section>

    <section className="row bg-dark m-0">

    <article className="col-md-7 bg-dark">
    <MapaUbic />
    </article>

    <article className="col-md-5 bg-dark my-5">
    <VideoPeli />
    </article>

    </section>

    <section className="row bg-danger m-0">
    <Descrip />
    </section>

    <footer>
    <PiePag />
    </footer>

    </div>

  );
}

export default App;
