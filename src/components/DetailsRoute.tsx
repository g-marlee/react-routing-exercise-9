import { useParams } from "react-router-dom";
import menu from "../data/menuitems";

export default function DetailsRoute() {
	const { id } = useParams();
	const menuItem = menu.find((item) => item.id === id);

	return (
		<div>
			<p>Name: {menuItem?.name}</p>
			<p>Calories: {menuItem?.calories}</p>
			<p>Description: {menuItem?.description}</p>
			<p>Vegetarian: {menuItem?.vegetarian ? "yes" : "no"}</p>
			<p>Price: {menuItem?.price}</p>
		</div>
	);
}
