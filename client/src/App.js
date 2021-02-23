import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Add from "./Pages/Add";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/search" component={Search} />
					<Route path="/add" component={Add} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
