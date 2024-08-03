import "./index.sass";
import { CircleX } from "lucide-react";
import { ReactNode } from "react";
import { AlertType } from "../types/index";
interface IProps {
	type: AlertType;
	icon: ReactNode;
	title: string;
	desc?: string;
	children?: ReactNode;
}
function Alert({ type = "alert-error", icon, title, desc, children }: IProps) {
	return (
		<div className={`alert-wrapper ${type}`}>
			<div className="alert-header">
				<div className="alert-title">
					{icon}
					<h4>{title}</h4>
				</div>
				<CircleX />
			</div>
			{children ? children : <p>{desc}</p>}
		</div>
	);
}
export default Alert;
