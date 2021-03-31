import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content.js'
import Imagen1 from './Imagen1.png'
import Imagen2 from './Imagen2.png'
import Imagen3 from './Imagen3.png'
import Imagen4 from './Imagen4.png'
import imagen5 from './imagen5.png'
import Imagen6 from './Imagen6.png'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const App = () => {
 const inicio = 'WhatsApp'
 const chat1 = 'Pedrito'
 const comentario = 'hola michael como te fue en tus pasantias?'
 const chat2 = 'Lucho'
 const comentario2 = 'que fue mano cuando nos econtramos para jugar free'
 const chat3 = 'Vicent'
 const comentario3 = 'mano podrias hacerme un favor?'
 const chat4 = 'Rogelio'
 const comentario4 = 'Cuando nos reuniremos con la gente para las cucardas'
 const chat5 = 'Codigos nucleares'
 const comentario5 = 'Muchachos los siguientes codigos que tenemos para hoy son 14079, 266402, 276268, 276376'
 const chat6 = 'Robert'
 const comentario6 = 'vamos para el centro a comer un rico chicharron de la tia tula'

  return (
    <div>
      <div class="Menu">
      <div class="Inicio">
      	<Content inicio={inicio}/>
      	<FontAwesomeIcon icon={faCamera}/>
      </div>
      <div class="Icono">
         <FontAwesomeIcon icon={faEllipsisV}/>
      </div>
      </div>
      <div class="primerchat">
      <div class="bordes">
      	<div>
      	<img src={Imagen1}/>
      </div>
      <div>
      	<Content chat1={chat1} comentario={comentario}/>
      </div>
      </div>
      <div class="bordes1">
      <div>
      	<img src={Imagen2}/>
      </div>
      <div>
      	<Content chat2={chat2} comentario2={comentario2}/>
      </div>
      </div>
      <div class="bordes2">
      <div>
      	<img src={Imagen3}/>
      </div>
      <div>
      	<Content chat3={chat3} comentario3={comentario3}/>
      </div>
      </div>
      <div class="bordes3">
      <div>
      	<img src={Imagen4}/>
      </div>
      <div>
      	<Content chat4={chat4} comentario4={comentario4}/>
      </div>
      </div>
      <div class="bordes4">
      <div>
      	<img src={imagen5}/>
      </div>
      <div>
      	<Content chat5={chat5} comentario5={comentario5}/>
      </div>
      </div>
      <div class="bordes5">
      <div>
      	<img src={Imagen6}/>
      </div>
      <div>
      	<Content chat6={chat6} comentario6={comentario6}/>
      </div>
      </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))