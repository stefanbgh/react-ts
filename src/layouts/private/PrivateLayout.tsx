import { ReactNode, useEffect } from "react";
import { Navbar, Footer} from "../../components";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/Routes";

interface IProps {
	children: ReactNode;
}

const PrivateLayout = ({ children }: IProps): JSX.Element | null => {
    const token = localStorage.getItem("token");

	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate(Routes.LOGIN);

			return;
		}
		// eslint-disable-next-line
	}, [token]);

	if (token) {
		return (
			<div>
				<Navbar/>
				{children}
				<Footer/>
			</div>
		);
	};

	return null;
};

export default PrivateLayout;