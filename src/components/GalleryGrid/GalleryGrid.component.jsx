import React, { useContext, useState } from 'react';
import { Grid, Preview, Screen, Button } from './GalleryGrid.styles';

import { TypeContext } from '../../contexts/Type.context';

import PROJECTS from '../../data/projects';

import OverlayModal from '../OverlayModal/OverlayModal.component';

const GalleryGrid = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalProject, setModalProject] = useState(null);
	const { type } = useContext(TypeContext);

	const selectModal = projectID => {
		console.log(projectID);
		if (projectID) setModalProject(PROJECTS[projectID - 1]);
		setModalOpen(true);
	};

	return (
		<>
			<Grid>
				{PROJECTS.map(proj => {
					if (proj.types.includes(type)) {
						return (
							<Preview
								key={proj.id}
								style={{ backgroundImage: `url('${proj.image}')` }}
							>
								<Screen onClick={() => selectModal(proj.id)}>
									<Button>
										<i className='material-icons'>open_in_full</i>
									</Button>
								</Screen>
							</Preview>
						);
					}
					return null;
				})}
			</Grid>
			{modalOpen && (
				<OverlayModal
					project={modalProject}
					closeModal={() => setModalOpen(false)}
				/>
			)}
		</>
	);
};

export default GalleryGrid;
