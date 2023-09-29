import {Sequence} from 'remotion';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompCursorAll} from '../CompCursorClick/CompCursor/CompCursorAll';
import {CursorServicios1} from '../CompCursorClick/CompCursor/CursorCustom';
import {CompClick2} from '../CompCursorClick/CompClick/CompClick2';
import {ScreenShot2} from '../ScreenShots/Screenshot2';
import { SvgCirculo } from '../SVG/svgCirculo';

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

				<IconBXFTexto2
					positionX={600}
					positionY={140}
					rotacion={140}
					duracionCaja={30}
					size={590}
					texto="Seleccionamos el tipo de facturas que necesitamos descargar."
					imagenX={-10}
					imagenY={50}
					fuenteSize={28}
					duracionCajaCompleta={150}
				/>

				<Sequence from={30} durationInFrames={100}>
						<div
							style={{
								transform: 'translateX(25px) translateY(390px)',
							}}
						>
							<SvgCirculo ancho={400} largo={70} seed={2} stroke={1} />
						</div>
						</Sequence>
						<Sequence from={40} durationInFrames={100}>
							<div
								style={{
									transform: 'translateX(24px) translateY(425px)',
								}}
							>
								<SvgCirculo ancho={400} largo={70} seed={3} stroke={1} />
							</div>
					</Sequence>


		
			</Sequence>
		</div>
	);
};
