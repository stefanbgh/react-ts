import { FC, useState } from "react";

import Container from "../../containers/Container/Container";
import { CartSidebar, CartOverlay, Logo, Navigation, ProfileDropdown, Sections } from "../../components";

import "./Navbar.scss"

const Navbar: FC = (): JSX.Element => {
	const [ profileDropdown, setProfileDropdown ] = useState<boolean>(false);
	const [ displayCart, setDisplayCart ] = useState<boolean>(false);

	const handleHideProfileDropdown = () => setProfileDropdown(false);
	const handleDisplayProfileDropdown = () => setProfileDropdown(true);

	const handleDisplayCart = () => setDisplayCart(!displayCart);
	const handleHideCart = () => setDisplayCart(!displayCart);

	return (
		<div>
			<Container>
				<div className="navbar">
					<Logo/>
					<Navigation/>
					<div className="flex items-center gap-2">
						<Sections
							handleHideProfileDropdown={handleHideProfileDropdown}
							handleDisplayCart={handleDisplayCart}
						/>
						<ProfileDropdown
                			profileDropdown={profileDropdown}
                			handleHideProfileDropdown={handleHideProfileDropdown}
                			handleDisplayProfileDropdown={handleDisplayProfileDropdown}
            			/>
					</div>
				</div>
			</Container>
			<CartSidebar
				displayCart={displayCart}
				handleHideCart={handleHideCart}
			/>
			<CartOverlay
				displayCart={displayCart}
				handleHideCart={handleHideCart}
			/>
		</div>
	);
};

export default Navbar;
