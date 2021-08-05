import React from 'react'

const Aside = () => {
	return (
		<div>
			<button className="btn btn-primary p-5 my-3 mx-5 border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle para videos</button>
			
			<p1 className="btn btn-primary p-5 text-justify">La costura es un arte usada principalmente para producir ropa y artículos para la casa, tales como cortinas, ropa de cama, tapicería y mantelería. 
			</p1>
			<div className="offcanvas offcanvas-show" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

			    <div class="dropdown mt-3">
      			<button class="btn btn-secondary dropdown-toggle px-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        		Video
      			</button>
     			 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        			<li><iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
      			</ul>
    			</div>
				<div className="offcanvas-body">Haga click</div>
			</div>
		
			</div>
	)
}

export default Aside