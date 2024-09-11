import React, { useState } from "react";
import "./Form.css";

function Form({ formStates, formHandlers }) {
	const { appMode, numUsers, numServices } = formStates;
	const { handleNumUsersInput, handleNumServicesInput } = formHandlers;
	return appMode === "Running" ? (
		<div className="form">
			<div className="form__dropdown">
				<label for="dropdown-1">Log in as</label>
				<select id="dropdown-1">
					<option className="dropdown__option" value="1">
						Option 1
					</option>
					<option className="dropdown__option" value="2">
						Option 2
					</option>
				</select>
			</div>
			<div className="form__dropdown">
				<label for="dropdown-2">Use service</label>
				<select id="dropdown-2">
					<option className="dropdown__option" value="1">
						Option 1
					</option>
					<option className="dropdown__option" value="2">
						Option 2
					</option>
				</select>
			</div>
		</div>
	) : (
		<div className="form">
			<div className="form__input">
				<label for="user-input">Number of users</label>
				<input
					id="user-input"
					type="text"
					pattern="[0-9]+"
					inputMode="numeric"
					onChange={(e) => handleNumUsersInput(e.target.value)}
					value={numUsers}
				></input>
			</div>
			<div className="form__input">
				<label for="service-input">Number of services</label>
				<input
					id="service-input"
					type="text"
					pattern="[0-9]+"
					inputMode="numeric"
					onChange={(e) => handleNumServicesInput(e.target.value)}
					value={numServices}
				></input>
			</div>
		</div>
	);
}

export default Form;
