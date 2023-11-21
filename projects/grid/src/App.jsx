import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import './App.css'

//los estilos en una etiqueta reciben un "arreglo" y no texto
//I mean, style = "display: flex" NO ES VALIDO
//isBoolean puede quitarse el valor del ={true}, es una forma mas corta

export function App(){ 
    const format = (user) => `@${user}`
    return(
        <section className="App">
            <TwitterFollowCard formatUserName={format} user="Toji1" name="Maki Zenin" isFolowing/>
            <TwitterFollowCard formatUserName={format} user="FanDeyuta" name="Zenin Maki" isFolowing={false}/>
            <TwitterFollowCard formatUserName={format} user="YaLesCargoLaChingada" name="Maki God" isFolowing/>
        </section>
    )
}