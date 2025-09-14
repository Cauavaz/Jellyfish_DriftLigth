// src/App.js
import './components/css/index.css';
import Header from './header';
import SectionDev from './components/SectionDev';

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>menu header</p>
        <p>menu header</p>
      </div>
      <Header />  
      <SectionDev />
    </div> 
  );
}

export default App;