import {Sequence} from 'remotion';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompCursorAll} from '../CompCursorClick/CompCursor/CompCursorAll';
import {CursorServicios1} from '../CompCursorClick/CompCursor/CursorCustom';
import {CompClick2} from '../CompCursorClick/CompClick/CompClick2';
import {ScreenShot2} from '../ScreenShots/Screenshot2';
import {SvgFlecha} from '../SVG/svgFlecha';
import {SvgCirculo} from '../SVG/svgCirculo';
import {TextoManchaMask} from '../Manchas/TextoManchaMask';

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

				<div style={{transform: 'translateX(600px) translateY(250px)'}}>
					<TextoManchaMask
						duracionCaja={200}
						altura={550}
						ancho={550}
						seed={23}
						x={14}
						y={14}
						fontSize={10}
						children1="Seleccionamos"
						children2="Recuperar Descargas"
						children3="de CFDI"
					/>
				</div>

				<Sequence from={100} durationInFrames={100}>
					<div
						style={{
							transform: 'translateX(25px) translateY(456px)',
						}}
					>
						<SvgCirculo
							ancho={400}
							largo={70}
							seed={2}
							stroke={3}
							duracionCaja={100}
						/>
					</div>
				</Sequence>

				<Sequence from={100} durationInFrames={200}>
					<div
						style={{
							transform: 'translateX(150px) translateY(100px) rotate(70deg)',
						}}
					>
						<SvgFlecha
							ancho={200}
							largo={200}
							seed={3}
							stroke={3}
							color="red"
							duracionCaja={200}
						/>
					</div>
				</Sequence>
			</Sequence>
		</div>
	);
};
