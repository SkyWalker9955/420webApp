import './App.css';
import NavbarComp from './components/Navbar';

function App() {
  return (
   
      <div className="App">
        <div>
          <div style={{ color: "rgb(255,199,44)", fontSize: 40 }}>
            Southeastern Louisiana University
          </div>
          <div style={{ color: "white", fontSize: 30, paddingBottom: 20 }}>
            Computer Science Department
          </div>
        </div>
        <NavbarComp />
      </div>
  );
}

export default App;
