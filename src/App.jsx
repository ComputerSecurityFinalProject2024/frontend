import React, { useEffect, useState } from "react";
import kerberosImg from "./assets/Kerberos.png";
import "./App.css";
import Form from "./components/Form/Form";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Card from "./components/Card/Card";
import useAuthorize from "./hooks/useAuthorize";
import sessionService from "./services/sessionService";

// function AuthorizeComponent() {
// 	const [sessionId, setSessionId] = useState('');
//     const [serviceId, setServiceId] = useState('');
//     const [message, setMessage] = useState('');
//     const [authenticator, setAuthenticator] = useState('');
//     const [isAuthorized, setIsAuthorized] = useState(false);
//     const [error, setError] = useState(null);

// 	const handleAuthorize = async (e) => {
// 		try {
// 			const data = await sessionService.authorizeUser(sessionId, serviceId);

// 		} catch (err) {
// 			console.error('Error authorizing user:', err);
// 		}
// 	}


// }

function App() {
import EditCard from "./components/EditCard/EditCard";

function App() {
	// 2 app modes: "Config", "Running"
	const [appMode, setAppMode] = useState("Config");
	const [appState, setAppState] = useState({
		step: 0,
		isStopped: false,
	});
	const [formData, setFormData] = useState({
		numUsers: 0,
		numServices: 0,
	});
	const appMessages = {
		interrupts: [
			"Incorrect user credentials",
			"Unauthorized user or non-existent service",
			"Unable to authorize the response from the server",
			"",
		],
		instructions: [
			"Step 1: Authenticate user",
			"Step 2: Authorize user access to service",
			"Step 3: Access the requested service",
			"Press Reset to continue",
		],
	};

	const handleReset = () => {
		setAppMode("Config");
		setAppState({
			step: 0,
			isStopped: false,
		});
		setFormData({
			numUsers: 0,
			numServices: 0,
		});
	};
	const handleRun = () => {
		if (appMode === "Config") {
			if (formData.numUsers == 0 || formData.numServices == 0) return;
			setAppMode("Running");
		} else {
			setAppState((prev) =>
				appState.step === 2
					? { step: prev.step + 1, isStopped: true }
					: { ...prev, step: prev.step + 1 }
			);
		}
	};
	const handleNumUsersInput = (num) => {
		setFormData((prev) => ({ ...prev, numUsers: num }));
	};
	const handleNumServicesInput = (num) => {
		setFormData((prev) => ({ ...prev, numServices: num }));
	};

	useEffect(() => {}, [appMode]);

	return (
		<div className="app">

			<header className="app__header">
				<div className="header__logo">
					<img src={kerberosImg} alt="Kerberos Logo" />
				</div>
				<Form
					formStates={{ appMode, ...formData }}
					formHandlers={{
						handleNumUsersInput,
						handleNumServicesInput,
					}}
				/>
				<ActionButtons
					handleReset={handleReset}
					handleRun={handleRun}
					isRunBtnDisabled={appState.isStopped}
				/>
			</header>
			<main className="app__main">
				<section className="main__left-column">
					<Card title="Steps" isRunning={appMode === "Running"}>
						{appMessages.instructions[appState.step]}
					</Card>
				</section>
				<section className="main__right-column">
					<EditCard
						title="Request"
						isRunning={appMode === "Running"}
					/>
					<Card title="Response" />
				</section>
			</main>
		</div>
	);
}

export default App;
