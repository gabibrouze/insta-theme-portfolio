import React, { useContext } from 'react';
import { Tabs, TabIcon, Button } from './TabBar.styles';
import { TypeContext } from '../../contexts/Type.context';

import Frontend from '../../assets/tabs/Frontend.png';
import Backend from '../../assets/tabs/Backend.png';
import Fullstack from '../../assets/tabs/Fullstack.png';

const TabBar = () => {
	const { type, changeType } = useContext(TypeContext);

	return (
		<Tabs>
			<Button value='Frontend' onClick={changeType}>
				<TabIcon
					className={type === 'Frontend' && 'active'}
					src={Frontend}
					alt='Frontend projects'
				/>
			</Button>
			<Button value='Backend' onClick={changeType}>
				<TabIcon
					className={type === 'Backend' && 'active'}
					src={Backend}
					alt='Backend projects'
				/>
			</Button>
			<Button value='Fullstack' onClick={changeType}>
				<TabIcon
					className={type === 'Fullstack' && 'active'}
					src={Fullstack}
					alt='Fullstack projects'
				/>
			</Button>
		</Tabs>
	);
};

export default TabBar;
