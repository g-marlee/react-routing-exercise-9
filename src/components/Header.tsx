import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Header() {
	return (
		<header className="bg-indigo-400 text-2xl underline py-2 flex justify-between">
			<Link to="/">Menu</Link>
			<Link to="/search">Search</Link>
		</header>
	);
}
