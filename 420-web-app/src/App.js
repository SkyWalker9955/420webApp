import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{color:"rgb(255,199,44)", fontSize: 40}}>Southeastern Louisiana University</div>
        <div style={{color:"white", fontSize: 20}}>Computer Science Department</div>
      </div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
