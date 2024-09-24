import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Suspense, useEffect } from "react";
import i18next from "i18next";
import { Provider } from "react-redux";
import store from './store';


const App = () => {

  useEffect(() => {
    document.body.dir = i18next.dir();
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback="loading">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};
export default App;
