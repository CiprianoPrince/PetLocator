import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import SearchBar from './Components/Body/SearchBar';
import Cards from './Components/Body/Cards';
import Footer from './Components/Footer/Footer';
function App() {
    return (
        <div className="App">
            <Navbar/>
            <SearchBar/>
            <Cards/>
            <Footer/>

        </div>
    );
}

export default App;
