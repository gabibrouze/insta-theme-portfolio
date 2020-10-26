import React from 'react';
import {
	Stats,
	ImageWrapper,
	Data,
	DataPoint,
	DataValue,
	DataDescription,
} from './StatsList.styles';

import STATS from '../../data/stats';

const StatsList = () => {
	return (
		<Stats>
			<ImageWrapper>
				<img src='https://iili.io/3W8p4V.jpg' alt='profile display' />
			</ImageWrapper>
			<Data>
				{STATS.map(data => (
					<DataPoint
						key={data.id}
						href={data.hrefVal ? data.hrefVal : '#'}
						download={data.id === 2}
					>
						<DataValue>{data.value}</DataValue>
						<DataDescription>{data.description}</DataDescription>
					</DataPoint>
				))}
			</Data>
		</Stats>
	);
};

export default StatsList;
