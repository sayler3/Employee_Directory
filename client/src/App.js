import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import TableView from "./Pages/TableView";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/table" component={TableView} />
					<Route path="/add" component={Add} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
