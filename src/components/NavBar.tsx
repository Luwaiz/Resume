import { useEffect, useState } from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/images/rb_21106.png";
import Instagram from "../assets/images/instagram_2111463.png";
import Linkedin from "../assets/images/linkedin_3536505.png";
import GitHub from "../assets/images/github_3291695.png";
import "./NavBar.css"
function NavBar() {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};

	return (
		<header className="header">
			<a href="#/" className="logo">Portfolio.</a>
			<nav className="navbar">
				<a
					href="#home"
					className={
						activeLink === "home" ? "active navbar-link" : "navbar-link"
					}
					onClick={() => setActiveLink("home")}
				>
					Home
				</a>
				<a
					href="#skills"
					className={
						activeLink === "skills" ? "active navbar-link" : "navbar-link"
					}
					onClick={() => setActiveLink("skills")}
				>
					Skills
				</a>
				<a
					href="#projects"
					className={
						activeLink === "projects" ? "active navbar-link" : "navbar-link"
					}
					onClick={() => setActiveLink("projects")}
				>
					Projects
				</a>
			</nav>
		</header>
		// <Navbar
		// 	expand="lg"
		// 	className={scrolled ? "bg-body-danger" : "bg-body-danger"}
		// >
		// 	<Container>
		// 		<Navbar.Brand href="#home">
		// 			<img src={""} alt="Logo" />
		// 		</Navbar.Brand>
		// 		<Navbar.Toggle aria-controls="basic-navbar-nav">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</Navbar.Toggle>
		// 		<Navbar.Collapse id="basic-navbar-nav">
		// 			<Nav className="me-auto">
		// 				<Nav.Link
		// 					href="#home"
		// 					className={
		// 						activeLink === "home" ? "active navbar-link" : "navbar-link"
		// 					}
		// 					onClick={() => setActiveLink("home")}
		// 				>
		// 					Home
		// 				</Nav.Link>
		// 				<Nav.Link
		// 					href="#skills"
		// 					className={
		// 						activeLink === "skills" ? "active navbar-link" : "navbar-link"
		// 					}
		// 					onClick={() => setActiveLink("skills")}
		// 				>
		// 					Skills
		// 				</Nav.Link>
		// 				<Nav.Link
		// 					href="#projects"
		// 					className={
		// 						activeLink === "projects" ? "active navbar-link" : "navbar-link"
		// 					}
		// 					onClick={() => setActiveLink("projects")}
		// 				>
		// 					Projects
		// 				</Nav.Link>
		// 			</Nav>
		// 			<span>
		// 				<div className="social-icon">
		// 					<a>
		// 						<img src={Instagram} alt="instagram" />
		// 					</a>
		// 					<a>
		// 						<img src={Linkedin} alt="linkedIn" />
		// 					</a>
		// 					<a>
		// 						<img src={GitHub} alt="gitHub" />
		// 					</a>
		// 				</div>
		// 				<button className="contact-us">
		// 					<span>Let's Connect</span>
		// 				</button>
		// 			</span>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	);
}

export default NavBar;
