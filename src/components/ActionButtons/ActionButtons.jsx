import React from "react";
import "./ActionButtons.css";

function ActionButtons({ handleReset, handleRun, isRunDisabled }) {
	return (
		<div className="buttons">
			<button
				id="button-left"
				className="button"
				onClick={() => handleReset()}
			>
				Reset
			</button>
			{isRunDisabled ? (
				<div id="button-right" className="button--disabled">
					Run
				</div>
			) : (
				<button
					id="button-right"
					className="button"
					onClick={() => handleRun()}
				>
					Run
				</button>
			)}
		</div>
	);
}

export default ActionButtons;
