import "./App.css";
import Header from "components/layout/Header/Header.js";
import HomePage from "pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
