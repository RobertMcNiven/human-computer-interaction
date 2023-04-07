import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactMe from "./components/ContactMe";

import Projects from "./components/Projects";

import SocialMedia from "./components/SocialMedia";

function App() {

return (
	<>
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
	</>
);
}

export default App;
