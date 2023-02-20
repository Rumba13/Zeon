import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter> 
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
