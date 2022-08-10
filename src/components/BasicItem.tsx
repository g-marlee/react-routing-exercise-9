import { Link } from "react-router-dom";
import Item from "../data/item";

interface MenuItemProps {
	item: Item;
}

export default function BasicItem({ item }: MenuItemProps) {
	return (
		<div className="py-4">
			<p>{item.name}</p>
			<p>{item.price}</p>
			<Link to={`/details/${item.id}`}>Details</Link>
		</div>
	);
}
