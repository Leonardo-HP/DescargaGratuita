import {Sequence} from 'remotion';
import {ScreenshotRecuperar} from './ScreenShots/ScreenShotsConsultarFacturas';
import {SvgLoading, SvgLoadingFondo} from './SVG/SvgDownLoading';

export const RecuperarCFDI = () => {
	return (
		<div>
			<ScreenshotRecuperar />
			<div style={{

				transform: 'translateY(620px)'
			}}>
				<SvgLoadingFondo />
				<Sequence from={50} durationInFrames={500}>
					<SvgLoading ancho={100} largo={100} stroke={7} />
				</Sequence>
			</div>
		</div>
	);
};
