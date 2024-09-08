import React from "react";
import "./ActionButtons.css";

function ActionButtons() {
	return (
		<div className="buttons">
			<button id="button-left" className="button">
				Reset
			</button>
			<button id="button-right" className="button">
				Run
			</button>
		</div>
	);
}

export default ActionButtons;
