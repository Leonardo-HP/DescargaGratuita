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
import {SvgFlecha2} from '../SVG/svgFlecha2';
import {IconBXF2} from '../highlight.tsx/LogosBXF2';
import {IconBXFTexto} from '../highlight.tsx/LogosBXFTexto';
import {TextoManchaMask} from '../Manchas/TextoManchaMask';

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
		[2000, 2100, 2550, 2600],
		[0.156, 1, 1, 0.156],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const movimientoIconosX = interpolate(
		frame,
		[2000, 2100, 2550, 2600],
		[116, 350, 350, 116],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const movimientoIconosY = interpolate(
		frame,
		[2000, 2100, 2550, 2600],
		[-203, 50, 50, -203],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div>
			<SecuenciaConsultar />

			<Sequence from={1750} durationInFrames={200}>
				<div
					style={{
						transform: `translateX(100px) translateY(81px)`,
					}}
				>
					<SvgCirculo
						ancho={120}
						largo={70}
						stroke={3}
						seed={1}
						duracionCaja={200}
					/>
				</div>

				<div
					style={{
						transform: `translateX(-190px) translateY(-330px) rotate(120deg)`,
					}}
				>
					<SvgFlecha2
						ancho={150}
						largo={150}
						stroke={3}
						seed={2}
						color="red"
						duracion={100}
					/>
				</div>
			</Sequence>

			<Sequence from={1550} durationInFrames={200}>
				<div
					style={{
						transform: 'translateX(400px) translateY(450px)',
					}}
				>
					<TextoManchaMask
						duracionCaja={200}
						altura={400}
						ancho={400}
						seed={7}
						x={20}
						y={10}
						fontSize={13}
						children1="Aqui aparecera"
						children2="el listado de"
						children3="facturas."
					/>
				</div>
			</Sequence>

			<Sequence from={1750} durationInFrames={200}>
				<div
					style={{
						transform: 'translateX(350px) translateY(200px)',
					}}
				>
					<TextoManchaMask
						duracionCaja={200}
						altura={400}
						ancho={400}
						seed={10}
						x={12}
						y={7}
						fontSize={12}
						children1="Estas son las"
						children2="opciones de  "
						children3="descarga individual."
					/>
				</div>
			</Sequence>

			<Sequence from={2000}>
				<SombraIndividual />
				<div
					style={{
						transform: `translateX(${movimientoIconosX}px) translateY(${movimientoIconosY}px) scale(${escalaIconos})`,
					}}
				>
					<SecuenciaIconos />
				</div>

				<Sequence from={200} durationInFrames={400}>
					<PopIcon
						positionX={-60}
						positionY={140}
						rotacion={0}
						duracionCaja={350}
						size={500}
						texto="Ver detalles de la factura"
						imagenX={0}
						imagenY={70}
						fuenteSize={40}
					/>
				</Sequence>

				<Sequence from={300} durationInFrames={400}>
					<PopIcon
						positionX={400}
						positionY={250}
						rotacion={0}
						duracionCaja={250}
						size={500}
						texto="Descargar la factura"
						imagenX={5}
						imagenY={70}
						fuenteSize={40}
					/>
				</Sequence>

				<Sequence from={400} durationInFrames={400}>
					<PopIcon
						positionX={830}
						positionY={140}
						rotacion={0}
						duracionCaja={150}
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
				<div style={{transform: 'translateX(700px) translateY(200px)'}}>
					<TextoManchaMask
						duracionCaja={300}
						altura={400}
						ancho={400}
						seed={6}
						x={14}
						y={18}
						fontSize={10}
						children1="Seleccionamos la "
						children2="fecha inicial y la fecha"
						children3=" final de emision"
					/>
				</div>
			</Sequence>

			<Sequence from={150} durationInFrames={200}>
				<div
					style={{
						transform: ' translateX(48px) translateY(460px)',
					}}
				>
					<SvgCirculo
						ancho={55}
						largo={65}
						seed={1}
						stroke={4}
						duracionCaja={200}
					/>
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
						duracionCaja={200}
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
							duracionCaja={200}
						/>
					</div>
				</Sequence>

				<Sequence durationInFrames={200}>
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
							duracionCaja={200}
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
							duracionCaja={200}
						/>
					</div>
				</Sequence>

				<Sequence from={100} durationInFrames={200}>
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
							duracionCaja={200}
						/>
					</div>
				</Sequence>
			</Sequence>

			<Sequence from={450} durationInFrames={400}>
				<div style={{transform: 'translateX(650px) translateY(380px)'}}>
					<TextoManchaMask
						duracionCaja={400}
						altura={450}
						ancho={450}
						seed={7}
						x={15}
						y={19}
						fontSize={10}
						children1="Podemos usar los"
						children2="iconos de calendario"
						children3={undefined}
					/>
				</div>
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

			<Sequence from={2700} durationInFrames={100}>
				<Cuadritos />
			</Sequence>

			<Sequence from={2600} durationInFrames={600}>
				<div style={{transform: 'translateX(650px) translateY(380px)'}}>
					<TextoManchaMask
						duracionCaja={600}
						altura={450}
						ancho={450}
						seed={12}
						x={10}
						y={14}
						fontSize={10}
						children1="Tambien podemos"
						children2="seleccionar multiples"
						children3="facturas"
					/>
				</div>
			</Sequence>

			<Sequence from={3050} durationInFrames={530}>
				<CheckFactura />
			</Sequence>

			<Sequence from={3350} durationInFrames={200}>
				<Cuadrito />
			</Sequence>

			<Sequence from={3350} durationInFrames={200}>
			<div style={{transform: 'translateX(650px) translateY(380px)'}}>
					<TextoManchaMask
						duracionCaja={600}
						altura={450}
						ancho={450}
						seed={13}
						x={14}
						y={14}
						fontSize={10}
						children1="O podemos seleccionar"
						children2="todas las facturas en"
						children3="la lista"
					/>
				</div>
			</Sequence>

			<Sequence from={2950} durationInFrames={100}>
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

			<Sequence from={3050} durationInFrames={40}>
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

			<Sequence from={3090} durationInFrames={40}>
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

			<Sequence from={3130} durationInFrames={40}>
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

			<Sequence from={3170} durationInFrames={40}>
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

			<Sequence from={3210} durationInFrames={260}>
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

			<Sequence from={3470} durationInFrames={461}>
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

			<Sequence from={3770} durationInFrames={200}>
				<div
					style={{
						transform: 'translateX(230px) translateY(550px)',
					}}
				>
					<SvgCirculo
						ancho={310}
						largo={110}
						stroke={2}
						seed={1}
						duracionCaja={100}
					/>
				</div>
			</Sequence>

			<Sequence from={3770} durationInFrames={200}>
				<div
					style={{
						transform: `translateX(350px) translateY(360px) rotate(-30deg)`,
					}}
				>
					<SvgFlecha
						ancho={200}
						largo={200}
						seed={5}
						stroke={3}
						color="red"
						duracionCaja={100}
					/>
				</div>
			</Sequence>


			<Sequence from={4250} durationInFrames={300}>
				<div
					style={{
						transform: `translateX(925px) translateY(353px) `,
					}}
				>
					<SvgHighlighter ancho={300} largo={200} seed={0} duracionCaja={300} />
				</div>
			</Sequence>

			<Sequence from={4300} durationInFrames={300}>
				<div
					style={{
						transform: `translateX(326px) translateY(381px) `,
					}}
				>
					<SvgHighlighter ancho={280} largo={200} seed={0} duracionCaja={300} />
				</div>
			</Sequence>

			<Sequence from={4650} durationInFrames={300}>
				<Sombra />
			</Sequence>


			<Sequence from={4200} durationInFrames={500}>
			<div style={{transform: 'translateX(0px) translateY(50px)'}}>
					<TextoManchaMask
						duracionCaja={500}
						altura={450}
						ancho={450}
						seed={15}
						x={14}
						y={14}
						fontSize={10}
						children1="Este es el codigo de"
						children2="referencia para hacer"
						children3="tu descarga"
					/>
				</div>
			</Sequence>

			<Sequence from={4600} durationInFrames={6500}>
			<div style={{transform: 'translateX(800px) translateY(450px)'}}>
					<TextoManchaMask
						duracionCaja={500}
						altura={450}
						ancho={450}
						seed={18}
						x={14}
						y={14}
						fontSize={10}
						children1="Es necesario anotarlo"
						children2="para el siguiente paso"
						children3="en tu descarga"
					/>
				</div>
			</Sequence>

			

			<Sequence from={5100} durationInFrames={6500}>
			<div style={{transform: 'translateX(0px) translateY(100px)'}}>
					<TextoManchaMask
						duracionCaja={500}
						altura={450}
						ancho={450}
						seed={21}
						x={14}
						y={14}
						fontSize={10}
						children1="Regresamos al menu "
						children2="de servicios de"
						children3="factura"
					/>
				</div>
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
