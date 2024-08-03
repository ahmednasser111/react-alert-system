import { Bell } from "lucide-react";
import { useState } from "react";
import Alert from "./component/Alert/index";
import "./index.css";

function App() {
	return (
		<div className="App">
			<h1>Vite + React</h1>
			<Alert
				type="alert-error"
				icon={<Bell />}
				title="Something went wrong"
				desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorem magnam nemo id, totam obcaecati rerum omnis. Alias, minima tenetur?"
			/>
			<Alert type="alert-warning" icon={<Bell />} title="Warning">
				<div>
					<a href="#">try</a>
				</div>
			</Alert>
		</div>
	);
}
export default App;
