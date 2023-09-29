import {AbsoluteFill, Img, staticFile} from 'remotion';
import { SvgTests } from './SVG/svgTests';

export const ServiciosDeFactura4 = () => {
	return (
		<div>
			<AbsoluteFill>
				<Img src={staticFile('papel.jpg')} z-index="-23" />
			</AbsoluteFill>

			<SvgTests />
		</div>
	);
};
