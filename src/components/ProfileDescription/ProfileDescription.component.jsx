import React from 'react';
import {
	Description,
	Title,
	Text,
	Byline,
	Hashtags,
	Small,
} from './ProfileDocument.styles';

const ProfileDescription = () => {
	return (
		<Description>
			<Title>
				Gabi Brouze
				<div>
					<a href='https://www.linkedin.com/in/gabi-brouze/'>LinkedIn</a> |
					<a href='https://github.com/gabibrouze'>Github</a>
				</div>
			</Title>
			<Text>
				<span>Analyse - Strategize - Design - Tinker - Create - Optimize</span>
				<br />
				<Byline>
					A youthful 25 year-old CS student who is dedicated to crafting
					high-quality content on the web.
				</Byline>
				<br />
				<Hashtags>
					<li>#Rest API</li>
					<li>#Database Design</li>
					<li>#React.js</li>
					<li>#MERN Stack</li>
					<li>#JAM Stack</li>
					<li>#Code Splitting</li>
					<li>#Serverless</li>
					<li>#Design</li>
					<li>#CSS-in-JS</li>
					<li>#UX/UI</li>
					<li>#Agile-Development</li>
					<li>#Computer-Security</li>
					<li>#Auth</li>
					<li>#Containers</li>
				</Hashtags>
				<Small>
					Click on the images in the grid to learn more about the projects I've
					worked on.
				</Small>
			</Text>
		</Description>
	);
};

export default ProfileDescription;
