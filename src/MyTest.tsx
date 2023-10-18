import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

import {CompSVG1, CompSVG2, CompSVG3} from './SVG/HighLightSVGcirculo';
import { Prisma } from './PrismaHighlight';

export const MyTest = () => {
	return (
		<div>
			<AbsoluteFill>
				<Img src={staticFile('papel.jpg')} z-index="-23" />
			</AbsoluteFill>

	<Prisma/>
		</div>
	);
};
