//We no longer need to include import react on every component
//if they are being imported into the main index.js which is importing it

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" component={AboutUs} exact />

					<Route path="/work" component={OurWork} exact />

					<Route path="/work/:id" component={MovieDetails} />

					<Route path="/contact" component={ContactUs} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
