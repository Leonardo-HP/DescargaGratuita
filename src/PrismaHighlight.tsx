import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

import {CompSVG1, CompSVG2, CompSVG3, CompSVG4, CompSVG5} from './SVG/HighLightSVGcirculo';

export const Prisma = () => {
	return (
		<div>
		
			<div
				style={{
					transform: 'translateX(640px) translateY(360px)',
				}}
			>
					<CompSVG1 />
					<CompSVG2 />
					<CompSVG3 />
          <CompSVG4 />
          <CompSVG5 />
			</div>
		</div>
	);
};
