import {evolvePath} from '@remotion/paths';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {  SvgTests } from './ScreenShots/SVG/svgTests';

export const MyComposition2 = () => {

	return (
		<div >
			<AbsoluteFill>
					<Img src={staticFile('papel.jpg')} z-index="-23" />
				</AbsoluteFill>
				
			<SvgTests/>

		</div>
	);
};
