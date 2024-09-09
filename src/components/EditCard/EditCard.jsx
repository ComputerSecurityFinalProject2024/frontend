import React from "react";
import Card from "../Card/Card";
import "./EditCard.css";

function EditCard({ title, isRunning }) {
	return (
		<Card title={title} isRunning={isRunning}>
			<textarea className="text-container" spellCheck="false">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
				iaculis aliquam ex nec viverra. Nullam venenatis pulvinar libero
				ut venenatis. Maecenas sit amet ex at justo suscipit rhoncus
				eget eu eros. Pellentesque vel tincidunt ipsum. Sed volutpat
				imperdiet sem quis gravida. Nunc blandit, justo quis convallis
				hendrerit, libero orci condimentum urna, eleifend vehicula nunc
				risus id mi.
			</textarea>
		</Card>
	);
}

export default EditCard;
