import React from "react";
import kerberosImg from "./assets/Kerberos.png";
import "./App.css";
import Form from "./components/Form/Form";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Card from "./components/Card/Card";

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
