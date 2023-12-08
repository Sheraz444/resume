
import './style.css'

function App() {


  return (
    <>
      <div className="title">
        <h1>React Resume sample</h1>
        <h2>By Sheraz Sheikh</h2>

      </div>
      <div className="wrapper">
        <div className="left">
          <div className="summary">
            <h2>SUMMARY:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis inventore ipsa quisquam officiis est? Deserunt facere tempora iure, error laudantium vitae perferendis nesciunt incidunt quidem enim alias maxime temporibus odit!</p>
          </div>
          <div className="exp">
            <h2>EXPERIANCE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, tempora.</p>
            <h2>Experiance 1</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, debitis.</li>
            </ul>

            <h2>Experiance 2</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, debitis.</li>
            </ul>
            
            
          </div>
        </div>

        <div className="right">
          <div className="data">
            <h2>CONTACTS:</h2>
            <ul>
              <li>mobile no </li>
              <li>g-mail </li>
              <li>Facebook </li>
              <li>Portfolio </li>
            </ul>
            <h2>SKILLS</h2>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
