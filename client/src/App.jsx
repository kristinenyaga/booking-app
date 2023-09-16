import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/hero/hero'
import Search from './components/hero/search/search';
import Trending from './components/trending/trending';
import Features from './components/features/features';

function App() {

  return (
    <Router>
      <Hero />
      <Search />
      <Features />
      <Trending />
     
    </Router>
  )
}

export default App
