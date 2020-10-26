import React from 'react';
import { GlobalStyle } from './styles';
import { TypeProvider } from './contexts/Type.context';

import Wrapper from './components/Wrapper/Wrapper.styles';
import TopBar from './components/TopBar/TopBar.component';
import StatsList from './components/StatsList/StatsList.component';
import ProfileDescription from './components/ProfileDescription/ProfileDescription.component';
import ActionBar from './components/ActionBar/ActionBar.component';
import SkillsBar from './components/SkillsBar/SkillsBar.component';
import TabBar from './components/TabBar/TabBar.component';
import GalleryGrid from './components/GalleryGrid/GalleryGrid.component';
import BottomBar from './components/BottomBar/BottomBar.component';

const App = () => {
	return (
		<TypeProvider>
			<Wrapper>
				<GlobalStyle />
				<TopBar />
				<StatsList />
				<ProfileDescription />
				<ActionBar />
				<SkillsBar />
				<TabBar />
				<GalleryGrid />
				<BottomBar />
			</Wrapper>
		</TypeProvider>
	);
};

export default App;
