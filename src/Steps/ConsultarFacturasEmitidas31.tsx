import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {SecuenciaConsultar} from './SecuenciaConsultar';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompCursorAll} from '../CompCursorClick/CompCursor/CompCursorAll';
import {Cursor} from '../CompCursorClick/CompCursor/Cursor';
import {SecuenciaConsultar2} from './SecuenciaConsultar2';
import {Lineas} from '../Lineas';
import {Cuadrito, Cuadritos} from '../Cuadritos';
import {CheckFactura} from '../CheckFactura';
import {Sombra, SombraIndividual} from './IntroEmoji1/SombraHighlight';
import {SvgCirculo} from '../SVG/svgCirculo';
import {SvgFlecha} from '../SVG/svgFlecha';
import {SvgSharp} from '../SVG/svgSharp';
import {SvgHighlighter} from '../SVG/svgHighlighter';
import {SecuenciaIconos} from '../SecuenciaIconos';
import {PopIcon} from '../highlight.tsx/PopIcon';
import { SvgFlecha2 } from '../SVG/svgFlecha2';
import { IconBXF2 } from '../highlight.tsx/LogosBXF2';
import { IconBXFTexto } from '../highlight.tsx/LogosBXFTexto';

export const ConsultarFacturasEmitidas3 = () => {
	const frame = useCurrentFrame();

	const yFlecha1 = interpolate(frame, [150, 200], [240, 250], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const xFllecha1 = interpolate(frame, [150, 200], [-100, -110], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const yFlecha2 = interpolate(frame, [500, 550], [70, 90], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const yFlecha3 = interpolate(frame, [600, 650], [70, 90], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const escalaIconos = interpolate(
		frame,
		[1850, 1900, 2200, 2250],
		[0.156, 1, 1, 0.156],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const movimientoIconosX = interpolate(
		frame,
		[1850, 1900, 2200, 2250],
		[116, 350, 350, 116],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const movimientoIconosY = interpolate(
		frame,
		[1850, 1900, 2200, 2250],
		[-203, 50, 50, -203],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div>
			<SecuenciaConsultar />




			<Sequence from={1550} durationInFrames={100}>
				<div
					style={{
						transform: `translateX(100px) translateY(81px)`,
					}}
				>
					<SvgCirculo ancho={120} largo={70} stroke={3} seed={1} />

				</div>
			
				<div
					style={{
						transform: `translateX(-190px) translateY(-330px) rotate(120deg)`,
					}}
				>
					<SvgFlecha2 ancho={150} largo={150} stroke={1} seed={2} color='red' duracion={50} />
				</div>

			</Sequence>
	








	

	

			<Sequence from={1800}>
			<SombraIndividual />
				<div
					style={{
						transform: `translateX(${movimientoIconosX}px) translateY(${movimientoIconosY}px) scale(${escalaIconos})`,
					}}
				>
					<SecuenciaIconos />
				</div>


				<Sequence from={100} durationInFrames={400}>
					<PopIcon
						positionX={-60}
						positionY={140}
						rotacion={0}
						duracionCaja={300}
						size={500}
						texto="Ver detalles de la factura"
						imagenX={0}
						imagenY={70}
						fuenteSize={40}
					/>
				</Sequence>

				<Sequence from={200} durationInFrames={400}>
					<PopIcon
						positionX={400}
						positionY={250}
						rotacion={0}
						duracionCaja={200}
						size={500}
						texto="Descargar la factura"
						imagenX={5}
						imagenY={70}
						fuenteSize={40}
					/>
				</Sequence>

				<Sequence from={300} durationInFrames={400}>
					<PopIcon
						positionX={830}
						positionY={140}
						rotacion={0}
						duracionCaja={100}
						size={500}
						texto="Rcuperar representacion impresa"
						imagenX={0}
						imagenY={40}
						fuenteSize={40}
					/>
				</Sequence>
			</Sequence>




				<Sequence from={2700}>
					<SecuenciaConsultar2 />
				</Sequence>



				<Sequence from={100} durationInFrames={300}>
					<IconBXFTexto2
						positionX={700}
						positionY={0}
						rotacion={150}
						duracionCaja={30}
						size={500}
						texto="Seleccionamos"
						imagenX={0}
						imagenY={0}
						fuenteSize={35}
						duracionCajaCompleta={150}
					/>
				</Sequence>

				<Sequence from={150} durationInFrames={100}>
					<div
						style={{
							transform: ' translateX(48px) translateY(460px)',
						}}
					>
						<SvgCirculo ancho={55} largo={65} seed={1} stroke={4} />
					</div>
				</Sequence>

				<Sequence from={150} durationInFrames={200}>
					<div
						style={{
							transform: `translateX(${xFllecha1}px) translateY(${yFlecha1}px) rotate(45deg)`,
						}}
					>
						<SvgFlecha
							ancho={200}
							largo={200}
							seed={1}
							stroke={1}
							color="red"
						/>
					</div>
				</Sequence>

				<Sequence from={250} durationInFrames={450}>
					<CompCursorAll
						positionX={85}
						positionY={150}
						empiezaX={1300}
						empiezaY={400}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={500}>
					<Sequence durationInFrames={200}>
						<div
							style={{
								transform: `translateX(540px) translateY(${yFlecha2}px) `,
							}}
						>
							<SvgFlecha
								ancho={200}
								largo={200}
								seed={1}
								stroke={1}
								color="red"
							/>
						</div>
					</Sequence>

					<Sequence durationInFrames={100}>
						<div
							style={{
								transform: ' translateX(584px) translateY(254px)',
							}}
						>
							<SvgSharp
								ancho={80}
								largo={80}
								stroke={4}
								seed={1}
								color="red"
								x={0}
								y={0}
							/>
						</div>
					</Sequence>

					<Sequence from={100} durationInFrames={200}>
						<div
							style={{
								transform: `translateX(1115px) translateY(${yFlecha3}px) `,
							}}
						>
							<SvgFlecha
								ancho={200}
								largo={200}
								seed={2}
								stroke={1}
								color="red"
							/>
						</div>
					</Sequence>

					<Sequence from={100} durationInFrames={100}>
						<div
							style={{
								transform: ' translateX(1165px) translateY(255px)',
							}}
						>
							<SvgSharp
								ancho={80}
								largo={80}
								stroke={4}
								seed={3}
								color="red"
								x={0}
								y={0}
							/>
						</div>
					</Sequence>
				</Sequence>

				<Sequence from={450} durationInFrames={200}>
					<IconBXFTexto2
						positionX={650}
						positionY={270}
						rotacion={20}
						duracionCaja={30}
						size={550}
						texto="Seleccionamos las fechas que necesitamos descargar"
						imagenX={10}
						imagenY={20}
						fuenteSize={30}
						duracionCajaCompleta={150}
					/>
				</Sequence>

				<Sequence from={700} durationInFrames={200}>
					<CompCursorAll
						positionX={630}
						positionY={-50}
						empiezaX={80}
						empiezaY={150}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={900} durationInFrames={100}>
					<CompCursorAll
						positionX={230}
						positionY={60}
						empiezaX={630}
						empiezaY={-50}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={1000} durationInFrames={100}>
					<CompCursorAll
						positionX={1220}
						positionY={-50}
						empiezaX={230}
						empiezaY={60}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={1100} durationInFrames={110}>
					<CompCursorAll
						positionX={1030}
						positionY={180}
						empiezaX={1220}
						empiezaY={-50}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={1210} durationInFrames={700}>
					<CompCursorAll
						positionX={1200}
						positionY={320}
						empiezaX={1030}
						empiezaY={180}
						duracion={80}
					>
						<Cursor />
					</CompCursorAll>
				</Sequence>

				<Sequence from={1500} durationInFrames={60}>
					<Lineas />
				</Sequence>

					<Sequence from={2800} durationInFrames={100}>
						<Cuadritos />
					</Sequence>

					<Sequence from={2990} durationInFrames={530}>
						<CheckFactura />
					</Sequence>

					<Sequence from={3310} durationInFrames={100}>
						<Cuadrito />
					</Sequence>

					<Sequence from={2910} durationInFrames={80}>
						<CompCursorAll
							positionX={80}
							positionY={-220}
							empiezaX={1200}
							empiezaY={320}
							duracion={80}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={2990} durationInFrames={40}>
						<CompCursorAll
							positionX={80}
							positionY={-127}
							empiezaX={80}
							empiezaY={-220}
							duracion={40}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3030} durationInFrames={40}>
						<CompCursorAll
							positionX={80}
							positionY={-4}
							empiezaX={80}
							empiezaY={-127}
							duracion={40}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3070} durationInFrames={40}>
						<CompCursorAll
							positionX={80}
							positionY={75}
							empiezaX={80}
							empiezaY={-4}
							duracion={40}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3110} durationInFrames={40}>
						<CompCursorAll
							positionX={80}
							positionY={125}
							empiezaX={80}
							empiezaY={75}
							duracion={40}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3150} durationInFrames={260}>
						<CompCursorAll
							positionX={80}
							positionY={270}
							empiezaX={80}
							empiezaY={125}
							duracion={40}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3410} durationInFrames={520}>
						<CompCursorAll
							positionX={80}
							positionY={-300}
							empiezaX={80}
							empiezaY={270}
							duracion={100}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={3710} durationInFrames={100}>
						<div
							style={{
								transform: 'translateX(230px) translateY(550px)',
							}}
						>
							<SvgCirculo ancho={310} largo={110} stroke={2} seed={1} />
						</div>
					</Sequence>

					<Sequence from={3710} durationInFrames={200}>
						<div
							style={{
								transform: `translateX(350px) translateY(360px) rotate(-30deg)`,
							}}
						>
							<SvgFlecha
								ancho={200}
								largo={200}
								seed={1}
								stroke={1}
								color="red"
							/>
						</div>
					</Sequence>

					<Sequence from={3710} durationInFrames={200}>
						<div
							style={{
								transform: `translateX(350px) translateY(360px) rotate(-30deg)`,
							}}
						>
							<SvgFlecha
								ancho={200}
								largo={200}
								seed={1}
								stroke={1}
								color="red"
							/>
						</div>
					</Sequence>

					<Sequence from={4220} durationInFrames={200}>
						<div
							style={{
								transform: `translateX(925px) translateY(353px) `,
							}}
						>
							<SvgHighlighter ancho={300} largo={200} seed={0} />
						</div>
					</Sequence>

					<Sequence from={4250} durationInFrames={200}>
						<div
							style={{
								transform: `translateX(326px) translateY(381px) `,
							}}
						>
							<SvgHighlighter ancho={280} largo={200} seed={0} />
						</div>
					</Sequence>

					<Sequence from={4650} durationInFrames={200}>
						<Sombra />
					</Sequence>

					<Sequence from={3930} durationInFrames={1300}>
						<CompCursorAll
							positionX={450}
							positionY={270}
							empiezaX={80}
							empiezaY={-300}
							duracion={50}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={5230} durationInFrames={200}>
						<CompCursorAll
							positionX={950}
							positionY={-270}
							empiezaX={450}
							empiezaY={270}
							duracion={100}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>

					<Sequence from={5430} durationInFrames={1300}>
						<CompCursorAll
							positionX={950}
							positionY={-230}
							empiezaX={950}
							empiezaY={-270}
							duracion={50}
						>
							<Cursor />
						</CompCursorAll>
					</Sequence>
		

		</div>


	);
};
