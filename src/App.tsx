import { Link, Route, Routes } from "react-router-dom";
import DetailsRoute from "./components/DetailsRoute";
import Header from "./components/Header";
import MenuRoute from "./components/MenuRoute";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<MenuRoute />} />
				<Route path="/details/:id" element={<DetailsRoute />} />
			</Routes>
		</div>
	);
}

export default App;
