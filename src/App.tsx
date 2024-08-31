import {
	Bell,
	AlertCircle,
	CheckCircle,
	Info,
	AlertTriangle,
} from "lucide-react";
import Alert from "./component/Alert/index";
import "./index.css";

function App() {
	return (
		<div className="App">
			<h1>Notification System</h1>

			{/* Default Alert */}
			<Alert
				type="alert-default"
				icon={<Bell />}
				title="Default Alert"
				desc="This is a default alert message. Everything is normal."
			/>

			{/* Success Alert */}
			<Alert
				type="alert-success"
				icon={<CheckCircle />}
				title="Success: Operation Completed"
				desc="Your operation was completed successfully!"
			/>

			{/* Error Alert */}
			<Alert
				type="alert-error"
				icon={<AlertCircle />}
				title="Error: Something Went Wrong"
				desc="We encountered an error while processing your request. Please try again later."
			/>

			{/* Warning Alert */}
			<Alert
				type="alert-warning"
				icon={<AlertTriangle />}
				title="Warning: Check Your Input"
				desc="Please review your input. Some fields might be missing or incorrect."
			/>

			{/* Info Alert */}
			<Alert
				type="alert-info"
				icon={<Info />}
				title="Info: System Update"
				desc="The system will undergo maintenance tonight from 12:00 AM to 2:00 AM."
			/>
		</div>
	);
}

export default App;
