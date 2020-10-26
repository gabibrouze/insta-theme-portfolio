import React from 'react';

import {
	Skills,
	Single,
	ImageWrapper,
	Inner,
	Description,
} from './SkillsBar.styles';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SKILLS from '../../data/skills';

const responsive = {
	regular: {
		breakpoint: { max: 5000, min: 601 },
		items: 5,
	},
	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 3,
	},
};

const SkillsBar = ({ deviceType }) => {
	return (
		<Skills>
			<Carousel
				responsive={responsive}
				centerMode={true}
				swipeable={true}
				draggable={true}
				ssr={true}
				keyBoardControl={true}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['mobile', 'regular']}
				deviceType={deviceType}
				itemClass='carousel-item-padding-40-px'
			>
				{SKILLS.map(skill => {
					return (
						<Single key={skill.id} index={skill.id}>
							<ImageWrapper>
								<Inner
									style={{ backgroundImage: `url('${skill.image}')` }}
								></Inner>
							</ImageWrapper>
							<Description>{skill.description}</Description>
						</Single>
					);
				})}
			</Carousel>
		</Skills>
	);
};

export default SkillsBar;
