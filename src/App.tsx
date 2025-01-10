import React from "react";
import NavBar from "./components/NavBar";
import IntroCard from "./components/introCard/IntroCard";


function App() {
  const places = ["China", "Japan", "France", "Germany", "Nigeria", "Poland"];

	return (
		<div>
			<NavBar/>
			<IntroCard/>
		</div>
	);
}
export default App;
