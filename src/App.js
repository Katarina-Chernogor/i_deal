import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home_page from './components/Home-page/Home-page';
import Footer from "./components/Footer/Footer";
import Services from './components/services/Services';
import Stages from './components/Stages/Stages';

function App() {
  return (
<div>
    <Header/>
    <Home_page/>
    <Services/>
    <Stages/>
    <Footer/>
</div>
  );
}

export default App;
