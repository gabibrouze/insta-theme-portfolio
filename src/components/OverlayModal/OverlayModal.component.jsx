import React from 'react';
import {
	Overlay,
	Content,
	CloseIcon,
	Image,
	Title,
	Links,
	LinkTo,
	Text,
	Hashtags,
	Hashtag,
} from './OverlayModal.styles';

const OverlayModal = ({ project, closeModal }) => {
	return (
		<Overlay>
			<Content onClick={closeModal}>
				<CloseIcon onClick={closeModal}>&times;</CloseIcon>
				<Image src={project.demoImage} alt='Project Demo' />
				<Title>{project.name}</Title>
				<Links>
					<LinkTo href={project.demoLink}>Demo</LinkTo>
					<LinkTo href={project.githubLink}>Repo</LinkTo>
				</Links>
				<Text>{project.description}</Text>
				<Hashtags>
					{project.hashtags.map(item => {
						return <Hashtag>{item}</Hashtag>;
					})}
				</Hashtags>
			</Content>
		</Overlay>
	);
};

export default OverlayModal;
