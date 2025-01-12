import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPageAsync.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync.async";
import {Suspense} from "react";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>load...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
};

export default App;
