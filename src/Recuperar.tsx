import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {ScreenshotRecuperar} from './ScreenShots/ScreenShotsConsultarFacturas';
import {SvgLoading, SvgLoadingFondo} from './SVG/SvgDownLoading';
import {TextoManchaMask} from './Manchas/TextoManchaMask';
import {CompCursorAll} from './CompCursorClick/CompCursor/CompCursorAll';
import {Cursor} from './CompCursorClick/CompCursor/Cursor';
import {SvgLine} from './SVG/svgLine';
import {SvgCirculo} from './SVG/svgCirculo';
import {SvgFlecha} from './SVG/svgFlecha';
import {CompClick2} from './CompCursorClick/CompClick/CompClick2';
import {PopIcon} from './highlight.tsx/PopIcon';
import {ThumbsUp} from './Manchas/ThumbsUp';

export const RecuperarCFDI = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [1500, 1550], [0, 1], {
		extrapolateRight: 'clamp',

		
	});

	const move = interpolate(frame, [1650, 1750], [500, 150], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

		
	


	return (
		<div>
			<div
				style={{
					transform: 'translateY(-1px)',
				}}
			>
				<ScreenshotRecuperar />
			</div>
			<Sequence from={50}>
				<div style={{transform: 'translateX(800px) translateY(100px)'}}>
					<TextoManchaMask
						duracionCaja={300}
						altura={450}
						ancho={450}
						seed={26}
						x={14}
						y={14}
						fontSize={10}
						children1="Aqui apareceran las "
						children2="Recuperar Descargas"
						children3="de CFDI"
					/>
				</div>
			</Sequence>
			<Sequence from={400} durationInFrames={400}>
				<div style={{transform: 'translateX(500px) translateY(100px)'}}>
					<TextoManchaMask
						duracionCaja={300}
						altura={450}
						ancho={450}
						seed={23}
						x={20}
						y={14}
						fontSize={10}
						children1="Buscamos el folio   "
						children2="generado en el "
						children3="paso anterior"
					/>
				</div>
			</Sequence>

			<Sequence from={700} durationInFrames={300}>
				<div style={{transform: 'translateX(0px) translateY(100px)'}}>
					<TextoManchaMask
						duracionCaja={300}
						altura={450}
						ancho={450}
						seed={20}
						x={14}
						y={20}
						fontSize={10}
						children1="y hacemos click en   "
						children2="el icono descargar"
						children3={undefined}
					/>
				</div>
				<div
					style={{
						transform: 'translateX(135px) translateY(500px)',
					}}
				>
					<SvgCirculo
						ancho={70}
						largo={80}
						stroke={3}
						seed={1}
						duracionCaja={200}
					/>
				</div>

				<div
					style={{
						transform: 'translateX(20px) translateY(340px) ',
					}}
				>
					<SvgFlecha
						ancho={200}
						largo={200}
						stroke={3}
						seed={10}
						duracionCaja={200}
						color="red"
					/>
				</div>
			</Sequence>

			<Sequence>
				<SvgLine
					ancho={1400}
					largo={10}
					stroke={10}
					seed={1}
					color="red"
					x={40}
					y={555}
					duracionCaja={300}
				/>
			</Sequence>

			<Sequence from={1050}>
				<div
					style={{
						transform: 'translateY(610px) translateX(900px)',
					}}
				>
					<SvgLoadingFondo />
					<Sequence from={50} durationInFrames={500}>
						<SvgLoading ancho={100} largo={100} stroke={7} />
					</Sequence>
				</div>
			</Sequence>

			<Sequence from={1000}>
				<div
					style={{
						transform: 'translateY(545px) translateX(170px)',
					}}
				>
					<CompClick2 />
				</div>
			</Sequence>

			<Sequence from={500} durationInFrames={1200}>
				<CompCursorAll
					positionX={185}
					positionY={200}
					empiezaX={1300}
					empiezaY={300}
					duracion={200}
				>
					<Cursor />
				</CompCursorAll>
			</Sequence>

			<Sequence from={1400}>
				<div
					style={{
						position: 'absolute',
						width: '1500px',
						height: '720px',
						background: 'white',
						opacity: `${opacidad}`,
					}}
				/>
			</Sequence>

			<Sequence from={1550}>
				<div style={{transform: `translateX(${move}px) translateY(200px)`}}>
					<ThumbsUp />
				</div>
			</Sequence>

			<Sequence from={1700}>
				<div style={{transform: 'translateX(400px) translateY(-150px)'}}>
					<PopIcon
						positionX={-60}
						positionY={140}
						rotacion={0}
						duracionCaja={350}
						size={700}
						texto="¡Y listo!   
						 estara descargado en tu sistema "
						imagenX={0}
						imagenY={130}
						fuenteSize={40}
					/>
				</div>
			</Sequence>
		</div>
	);
};
