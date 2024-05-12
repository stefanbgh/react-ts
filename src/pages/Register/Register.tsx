import React, { FC} from "react";

import { SignUp, Spinner } from "../../components";

import logo from "../../assets/logo.webp";
import wallpaper from "../../assets/wallpaper.webp";

const Register: FC = (): JSX.Element => {
	const [ loading, setLoading ] = React.useState<boolean>(false);

	return (
		<div className="flex items-center justify-center max-xl:flex-col max-xl:h-screen">
			<div className="relative w-1/2">
                <img className="absolute top-2.5 right-0 z-10 max-xl:relative" src={logo} alt="logo.webp"/>
                <img className="w-full h-screen relative max-xl:hidden" src={wallpaper} alt="wallpaper.webp"/>
            </div>
			<div className="w-1/2">
				<SignUp 
					setLoading={setLoading}
				/>
			</div>
			{ loading && <Spinner/> }
		</div>
	);
};

export default Register;
