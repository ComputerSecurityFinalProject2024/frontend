import React from "react";
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

	return (
		<div className="app">

			<header className="app__header">
				<div className="header__logo">
					<img src={kerberosImg} alt="Kerberos Logo" />
				</div>
				<Form />
				<ActionButtons />
			</header>
			<main className="app__main">
				<section className="main__left-column">
					<Card title="Steps" />
				</section>
				<section className="main__right-column">
					<Card title="Request" />
					<Card title="Response" />
				</section>
			</main>
		</div>
	);
}

export default App;
