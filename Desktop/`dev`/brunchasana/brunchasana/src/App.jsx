import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <section className="home" id='home'>
      <div className="img-container">
        <img src="./src/assets/AdobeStock_340802049.jpeg" alt="" />
      </div>
      <div className="hero-left">
        <div className="logo-container">
          <img src="./src/assets/Logotipo 500x500 px.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li className="nav-item"><a href="#equipo" className="nav-link">equipo</a></li>
            <li className="nav-item"><a href="#talleres" className="nav-link">talleres</a></li>
            <li className="nav-item"><a href="#contactanos" className="nav-link">contactanos</a></li>
          </ul>
        </nav>
      </div>
    </section>

    <section id='equipo'>
      <h1 className="section-title">equipo</h1>
      <div className="equi-box">
        <div className="equi-container"><p className="equi-text">BRUNCHASANA nace como una forma de acercarse de manera lúdica y recreativa al mundo holístico, a la filosofía del yoga donde encontrar el camino que mejor te resuene a través de lo creativo , de los hábitos saludables, del arte terapéutico y también del encuentro con quienes vibren en tú misma frecuencia. </p></div>
        <div className="equi-container">
          <div className="eq-img-container one"><img src="./src/assets/Logotipo 500x500 px.png" alt="" /></div>
          <div className="eq-img-container two"><img src="./src/assets/Logotipo 500x500 px.png" alt="" /></div>
          <div className="eq-img-container thr"><img src="./src/assets/Logotipo 500x500 px.png" alt="" /></div>
        </div>
        <div className="equi-container"><p className="equi-text">Soltando cargas emocionales a través del movimiento corporal, fluyendo con pinceladas de acuarelas las emociones enquistadas en tu estructura mental, que provocan estados de ansiedad y agobio. Te esperamos para profundizar en el redescubrir de tu mundo interior y con una mirada amorosa y compasiva hacer los cambios que mejor se adapten a tu crecimiento  personal.</p></div>
      </div>
    </section>

    <section id="talleres">
    <h1 className="section-title">talleres</h1>
    
    </section>

    <section id="contactanos">
    <h1 className="section-title">contactanos</h1>
    </section>

    <footer>
      <a className="footer-item">
      <i class="fa-brands fa-instagram"></i>
      <p>@brunchasana</p>
      </a>
      <a className="footer-item">
      brunchasana@gmail.com
      </a>
      <div className="footer-item">
      
      <p>011-4449-5049</p>
      </div>
    </footer>
    </>
  )
}

export default App