import './App.css';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <div className="card">
               <h3>Nombre Apellido</h3>
               <div>
                  <p>Rol/Puesto</p>
                  <p>Descripcion</p>
               </div>
            </div>
            <div className="card">
               <h3>Alejandro Santini</h3>
               <div>
                  <p>Profesor de FIP en CEPIT</p>
                  <p>Tecnologias: Git, React, Javascript...</p>
               </div>
            </div>
            <div className="card">
               <h3>Gisela Gentile</h3>
               <div>
                  <p>Alumna de FIP en CEPIT</p>
                  <p>Tecnologias: Git, React, Javascript...</p>
               </div>
             </div>
         </header>
      </div>
   );
}

export default App;
