import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPageAsync.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
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
