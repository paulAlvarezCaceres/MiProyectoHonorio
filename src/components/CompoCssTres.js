import React from 'react'
import './CompoCssTres.css'
import style from './CompoObjTres.js'

const CompoCssTres = () => {
	return (
		<div className='marcoComponente'>
			<h4>Componente 3</h4>
			<button style={{ backgroundColor: 'red', color: 'blue', padding:'2px' }}>
			Botón 1 con estilos en linea de atributos (Definido como objeto)
			</button><hr/>

			<button>
				Botón 2 con estilos en archivo css (normal)
			</button>		
			<br/>

			<button style={style.estilo1}>
				Botón 3 con estilos en archivo js (Definido como objeto)
			</button>			
		</div>
	)
}

export default CompoCssTres