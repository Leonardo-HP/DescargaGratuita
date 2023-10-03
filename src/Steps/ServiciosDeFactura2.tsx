import {Sequence} from 'remotion';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompCursorAll} from '../CompCursorClick/CompCursor/CompCursorAll';
import {CursorServicios1} from '../CompCursorClick/CompCursor/CursorCustom';
import {CompClick2} from '../CompCursorClick/CompClick/CompClick2';
import {ScreenShot2} from '../ScreenShots/Screenshot2';
import { SvgCirculo } from '../SVG/svgCirculo';
import { TextoManchaMask } from '../Manchas/TextoManchaMask';

export const ServiciosDeFactura2 = () => {
	return (
		<div>
			<ScreenShot2 />
			<Sequence from={50}>
				<Sequence from={310}>
					<div
						style={{
							transform: 'translateX(330px) translateY(460px)',
						}}
					>
						<CompClick2 />
					</div>
				</Sequence>

				<Sequence from={180} durationInFrames={300}>
					<CompCursorAll
						positionX={320}
						positionY={464}
						empiezaX={1500}
						empiezaY={1000}
						duracion={100}
					>
						<Sequence from={5}>
							<CursorServicios1 />
						</Sequence>
					</CompCursorAll>
				</Sequence>

	


<div style={{transform: 'translateX(600px) translateY(250px)'}}>
						<TextoManchaMask
							duracionCaja={300}
							altura={500}
							ancho={500}
							seed={4}
							x={10}
							y={10}
							fontSize={10}
							children1='Seleccionamos el tipo '
							children2='de facturas que  '
							children3='necesitamos descargar.'
						/>
					</div>


				<Sequence from={30} durationInFrames={200}>
						<div
							style={{
								transform: 'translateX(25px) translateY(390px)',
							}}
						>
							<SvgCirculo ancho={400} largo={70} seed={2} stroke={1} duracionCaja={200} />
						</div>
						</Sequence>
						<Sequence from={40} durationInFrames={200}>
							<div
								style={{
									transform: 'translateX(24px) translateY(425px)',
								}}
							>
								<SvgCirculo ancho={400} largo={70} seed={3} stroke={1} duracionCaja={200} />
							</div>
					</Sequence>


		
			</Sequence>
		</div>
	);
};
