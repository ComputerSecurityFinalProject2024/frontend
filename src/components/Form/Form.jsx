import React from "react";
import "./Form.css";

function Form() {
	return (
		<div className="form">
			<div className="dropdown">
				<label className="dropdown__label" for="dropdown-1">
					Log in as
				</label>
				<select id="dropdown-1">
					<option className="dropdown__option" value="1">
						Option 1
					</option>
					<option className="dropdown__option" value="2">
						Option 2
					</option>
				</select>
			</div>
			<div className="dropdown">
				<label className="dropdown__label" for="dropdown-1">
					Use service
				</label>
				<select id="dropdown-1">
					<option className="dropdown__option" value="1">
						Option 1
					</option>
					<option className="dropdown__option" value="2">
						Option 2
					</option>
				</select>
			</div>
		</div>
	);
}

export default Form;
