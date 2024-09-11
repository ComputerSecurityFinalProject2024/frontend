import React from "react";
import "./Card.css";

function Card({ title, isRunning, children }) {
	return (
		<article className="card">
			<div className="card__title">{title}</div>
			{isRunning && <div className="card__content">{children}</div>}
		</article>
	);
}

export default Card;
