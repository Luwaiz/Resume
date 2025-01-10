import React from "react";
import "./IntroCard.css";
import Avatar from "../../assets/images/androgynous-avatar-non-binary-queer-person.png";
import { ReactTyped, Typed } from "react-typed";

function IntroCard() {
	const textContent = [
		"Mobile App Developer",
		"Frontend Developer",
		"Project Manager",
	];
	return (
		<div className="container">
			<div>
				<h1>Hi, I'm Emmanuel</h1>
				<h2>
					I'm a{" "}
					<ReactTyped
						strings={textContent}
						typeSpeed={80}
						backSpeed={50}
						loop
					/>
				</h2>
				<p>
					Aspiring Mobile Application Developer with hands-on experience in
					React Native, UI/UX design, and project management with a track record
					of developing innovative solutions, including anonymous chat apps and
					transportation systems. Currently building skills in React.js and
					passionate about leveraging cutting-edge technologies to create
					user-focused applications. Seeking opportunities in dynamic,
					growth-oriented organizations.
				</p>
				<div>
					<a href="#skills" className="download-cv">
						Download CV
					</a>
				</div>
			</div>
			<div className="avatar">
				<img src={Avatar} alt="avatar" />
			</div>
		</div>
	);
}

export default IntroCard;
