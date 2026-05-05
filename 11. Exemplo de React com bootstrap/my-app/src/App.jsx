import { useState } from 'react'; // Variáveis que fazem o react reagir
import './App.css'

function App() {

  const [mostrar, setMostrar] = useState(false); //constante mostrar inicial como false

  function OlaReact() {
    setMostrar(true);//Muda o valor para verdadeiro

    setTimeout(() => {//fecha o card em 5 segundos
      setMostrar(false);
    }, 5000);
  }

  return (
    //Div container formatada por aqui mesmo no Bootstrap
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>

      {/* interpolação para  verificar se o card está ativo*/}
      <div id="alerta" className={`alert alert-warning ${mostrar ? 'd-block' : 'd-none'}`}>
        Estamos no React
      </div>
      {/* Paragrafo */}
      <p>Criando Projeto React com Bootstrap</p>

      <button onClick={OlaReact} className='btn btn-primary'>
        Botão bootstrap
      </button>

      <div className="card w-75 mt-3">

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Disciplinas estudadas até agora.
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
              <div className="accordion-body">
                <strong>UX | UI</strong> Matéria para entender como o cliente pensa e como interpreta a navegação no App. 
              </div>
            </div>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>HTML & CSS</strong> Aprendemos a Estrutura e formatação de Sites. 
              </div>
            </div>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>Javascript</strong> Aprendemos a interação entre usuário e aplicação. 
              </div>
            </div>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>Bootstrap</strong> Framwork de Estilização de app web. 
              </div>
            </div>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>Mobirise</strong> Gerenciador de Conteúdo que utiliza bootstrap. 
              </div>
            </div>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>React</strong> Super biblioteca capaz de renderizar aplicações Web. 
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default App
