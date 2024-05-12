import { FC} from "react";
import Container from "../../containers/Container/Container";

import { Carousel, Hello, Contact } from "../../components";

const Home: FC = (): JSX.Element => {
	return (
		<div className="h-screen flex flex-col items-center relative">
			<Hello/>
			<div className="h-1/3 flex flex-col justify-center">
				<Container>
					<Carousel/>
				</Container>
			</div>
			<Contact/>
        </div>
	);
};

export default Home;
