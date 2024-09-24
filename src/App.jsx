import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import i18next from "i18next";
import { LanguageContext, useLanguageContext } from '../src/contexts/LanguageContexts';



const App = () => {
  useEffect(() => {
    document.body.dir = i18next.dir();
  }, []);

  const language = useLanguageContext();


  return (
    <LanguageContext.Provider value={language}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
