import logo from './logo.svg';
import './App.css';
import SiginButtons from './components/SiginButtons'

// import SiginFacebook from './components/SiginFacebook'
import Website from './components/Website'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showcompany from './components/Showcompany';
import Detail from "./components/Detail"
import Mode from './Mode';
import Mycompanies from './components/Mycompanies';



function App() {
  return (
    <> <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiginButtons />} />
          {/* <Route path="/SiginFacebook" element={<SiginFacebook />} /> */}
          <Route path="/Website" element={<Website />} />
          <Route path="/Showcompany"  element={<Showcompany />} />
          <Route path="/detail"  element={<Detail/>} />
          <Route path="/mycompany"  element={<Mycompanies/>}/>
        </Routes>
      </BrowserRouter>





       {/* <Website/> */}

    </div></>
  );
}

export default App;
