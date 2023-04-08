import "./App.css";
// importing components from react-router-dom package
import {
HashRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

// import Home component
import Home from "./Pages/Home";
// import About component
import About from "./Pages/About";
// import ContactUs component
import ContactMe from "./Pages/ContactMe";

import Projects from "./Pages/Projects";

import SocialMedia from "./Pages/SocialMedia";


import ColorSchemesExample from "./Pages/Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

return (
	<>
	<div>
		<ColorSchemesExample />
	</div>
	<div>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Switch>
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component*/}
		<Route exact key = "home" path="/" component={Home} />
			
		{/* This route is for about component
		with exact path "/about", in component
		props we passes the imported component*/}
		<Route key = "about" path="/about" component={About} />
			
		{/* This route is for contactme component
		with exact path "/contactme", in
		component props we passes the imported component*/}
		<Route key = "contactme" path="/contactme" component={ContactMe} />
			
		{/* If any route mismatches the upper
		route endpoints then, redirect triggers
		and redirects app to home component with to="/" */}

		<Route key = "projects" path="/projects" component={Projects} />
		<Route key = "socialmedia" path="/socialmedia" component={SocialMedia} />

		<Redirect to="/" />
		</Switch>
	</Router>
	</div>
	</>
);
}

export default App;
