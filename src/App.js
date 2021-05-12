import logo from './logo.svg';
import './App.css';
//Home
import Home from './pages/Home'
//Header 
import Header from './components/Header'
//Footer
import Footer from './components/Footer'
import About from './pages/About'
import Categories from './pages/Categories'
import Listing from './pages/Listing'

import {BrowserRouter, Switch,Route, Router } from 'react-router-dom'

//React router support


function App() {
  return (
    <div className="App">
      <Router> 

        <Header />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/listing' component={Listing} />
            <Route path='/categories' component={Categories} />
          </Switch>

        {/* <Home /> */}

        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
