// src/App.js
import './components/css/index.css';
import Header from './header';
import SectionDev from './components/SectionDev';

function App() {
  return (
    <div className="App">
      <div className="header">
        <p className="header-text">Info</p>
        <p className="header-text">Menu</p>
      </div>
      <Header />  
      <SectionDev />
    </div> 
  );
}

export default App;