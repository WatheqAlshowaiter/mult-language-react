import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Suspense, useEffect } from "react";
import i18next from "i18next";
import { Provider } from "react-redux";
import  store  from './store';


const App = () => {

  useEffect(() => {
    const updateDirection = (lng) => {
      document.body.dir = i18next.dir(lng);
    };

    // Set initial direction
    updateDirection(i18next.language);

    // Listen for language changes
    i18next.on('languageChanged', updateDirection);

    // Cleanup the event listener on unmount
    return () => {
      i18next.off('languageChanged', updateDirection);
    };
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
