import { FC } from 'react';
import { DesktopOnlyView, MobileOrTabletView } from 'components/Media';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar: FC = () => {
	return (
		<div>
			<DesktopOnlyView>
				<DesktopNavBar />
			</DesktopOnlyView>
			<MobileOrTabletView>
				<MobileNavBar />
			</MobileOrTabletView>
		</div>
	);
};

export default NavBar;
