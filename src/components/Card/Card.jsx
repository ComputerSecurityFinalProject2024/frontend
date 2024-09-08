import React from "react";
import "./Card.css";

function Card({ title }) {
	return (
		<article className="card">
			<div className="card__title">{title}</div>
		</article>
	);
}

export default Card;
