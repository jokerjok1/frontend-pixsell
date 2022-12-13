import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPageGame from "./pages/Games/MainPageGame";

function App() {
  return (
    <div className="app">
    <Header/>
     <MainPage/>
     <Footer/>
    </div>
  );
}

export default App;
