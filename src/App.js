import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo" />
        <div className="navigation-sub">
          <div href="" className="item">Projects</div>
          <div href="" className="item">Articles</div>
          <div href="" className="item">About</div>
        </div>
      </div>
    </div>
  );
}

export default App;
