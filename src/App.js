import logo from './logo.svg';
import './App.css';

//Home
import Home from './pages/Home'

//Header 
import Header from './components/Header'

//Footer
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
