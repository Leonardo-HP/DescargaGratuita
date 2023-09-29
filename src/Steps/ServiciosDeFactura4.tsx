import {Sequence} from 'remotion';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompCursorAll} from '../CompCursorClick/CompCursor/CompCursorAll';
import {CursorServicios1} from '../CompCursorClick/CompCursor/CursorCustom';
import {CompClick2} from '../CompCursorClick/CompClick/CompClick2';
import {ScreenShot2} from '../ScreenShots/Screenshot2';
import { SvgFlecha } from '../SVG/svgFlecha';
import { SvgCirculo } from '../SVG/svgCirculo';

export const ServiciosDeFactura4 = () => {
	return (
		<div>
			<ScreenShot2 />
<Sequence from={50} durationInFrames={600}>
			<Sequence from={350}>
				<div
					style={{
						transform: 'translateX(328px) translateY(495px)',
					}}
				>
					<CompClick2 />
				</div>
			</Sequence>


			<Sequence from={200} durationInFrames={380}>
				<CompCursorAll
					positionX={320}
					positionY={500}
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
				rotacion={170}
				duracionCaja={30}
				size={590}
				texto="Seleccionamos Recuperar Descargas de CFDI."
				imagenX={0}
				imagenY={45}
				fuenteSize={30}
				duracionCajaCompleta={150}
			/>


			<Sequence from={100} durationInFrames={100}>
				<div
					style={{
						transform: 'translateX(25px) translateY(456px)',
					}}
				>
					<SvgCirculo ancho={400} largo={70} seed={2} stroke={1} />
				</div>
			</Sequence>


      <Sequence from={100} durationInFrames={200}>
				<div
					style={{
						transform: 'translateX(100px) translateY(200px) rotate(70deg)',
					}}
				>
					<SvgFlecha ancho={200} largo={200} seed={3} stroke={1} color='red' />
				</div>
			</Sequence>


      </Sequence>
		</div>
	);
};
