// src/App.js
import './components/css/index.css';
import Header from './header';
import SectionDev from './components/SectionDev';
import SectionProjects from './components/SectionProjects';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import './components/css/scrollbar.css';

function App() {
  // Estilos personalizados para o scrollbar
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: '#ff73b0',
      borderRadius: '4px',
      width: '6px',
      opacity: '0.8',
      ':hover': {
        backgroundColor: '#ff4da6',
        width: '8px'
      }
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrack = ({ style, ...props }) => {
    const trackStyle = {
      backgroundColor: '#360018',
      right: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
      width: '8px',
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
      <div className="App">
        <div className="header">
          <p className="header-text">Info</p>
          <p className="header-text">Menu</p>
        </div>
        <Header />  
        <SectionDev />
        <SectionProjects />
        <SectionAbout />
        <SectionContact />
      </div>
  );
}

export default App;