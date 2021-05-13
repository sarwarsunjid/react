import logo from './logo.svg';
import './App.css';
//Home
import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import Listing from './pages/Listing'
import Contact from './pages/Contact'

//Header 
import Header from './components/Header'
//Footer
import Footer from './components/Footer'


import {BrowserRouter, Switch,Route, Router } from 'react-router-dom'

//React router support
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/listing' component={Listing} />
            <Route path='/categories' component={Categories} />
            <Route path='/contact' component={Contact} />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
   
  );
}

export default App;
