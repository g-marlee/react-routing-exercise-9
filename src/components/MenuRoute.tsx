import { useState } from "react";
import Item from "../data/item";
import menu from "../data/menuitems";
import BasicItem from "./BasicItem";

export default function MenuRoute() {
	return (
		<>
			{menu.map((item) => (
				<div key={item.id}>
					<BasicItem item={item} />
				</div>
			))}
		</>
	);
}
