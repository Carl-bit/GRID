import React from 'react'
import ReactDOM from 'react-dom/client'

//ni idea como son los comentarios grandes
//pero, acotaciones
//esto esta renderizando
//y como tiene varias formas de expresarse
//esta en especifico es casi como la de js si no fuera por que no he puesto
//const root ReactDOM.createRoot(document.getElementById('root'))
//y luego solo hacer root.render()
//y como es parecido la wea colapsa si se ingresa mas parametros de los 
//no se debe
//como insertar varios botones
//no puedes llegar y aplicar <boton> colapsa



//si no que tienes empezar a familiarizarte con las etiquetas
//LA SGTE CONST NO ES FUNCION
//ES COMPONENTE COÑOOOOOOO
//LO CUAL HAY QUE RESPETAR EL PASCAL CASE
//PascalCase,camelCase,sanke_case,kebab-case


//pillar el por que del error al cargar los componentes
//[vite] hmr update /src/main.jsx
//[vite] hmr invalidate /src/main.jsx Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react-swc#consistent-components-exports

const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Button text ="Button 0"/>
    <Button text ="Button 1"/>
  </React.Fragment>
)
