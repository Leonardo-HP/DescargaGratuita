import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	interpolateColors,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {LetrasDireccion} from './Texto/LetrasDireccion';
import {Blanco, Flechas, LupaLogo} from './ScreenShots/ScreenshotPrimerPaso';
import {Caret} from './Texto/Caret';
import {CirclePop} from './highlight.tsx/CirclePop';
import {CirclePop2} from './highlight.tsx/CirclePop2';
import {CompCursorClick2} from './CompCursorClick/CompCursorClick2';
import {Blanco3} from './Cortinillas/Colors';

export const ComponenteDireccion = () => {
	const frame = useCurrentFrame();

	/* Cuando abre */
	const abre = interpolate(
		frame,
		[80, 110, 260, 310, 750, 850],
		[90, 50, 50, 40, 40, 90],
		{
			easing: Easing.elastic(1),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const X = interpolate(frame, [80, 110, 260, 310], [600, 410, 410, 370], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const color = interpolateColors(
		frame,
		[70, 80, 790, 810],
		['#CC1E2C', 'white', 'white', '#CC1E2C']
	);

	/// ///////////////////////////////////////////////////////////////

	/* Sube */
	const Y = interpolate(
		frame,
		[0, 30, 35, 70, 850, 885],
		[470, 235, 235, 0, 0, -300],
		{
			easing: Easing.elastic(1),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	/// ///////////////////////////////////////////////////////////////

	/* Se va a la esquina */
	const escala = interpolate(frame, [420, 470], [1, 0.5], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const X2 = interpolate(frame, [420, 470], [0, -650], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const Y2 = interpolate(frame, [420, 470], [0, -550], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	/// ///////////////////////////////////////////////////////////////

	return (
		<div>
			<Blanco3 />

			<div
				style={{
					filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
					transform: `scale(${escala}) translateX(${X2}px) translateY(${Y2}px)`,
					position: 'absolute',
				}}
			>
				<div
					style={{
						transform: `translateX(${X}px) translateY(${Y}px)`,
						width: '850px',
						height: '850px',
						background: `${color}`,
						clipPath: `inset(30% ${abre}% 60% 0% round 20% 20% 20% 20%) `,
					}}
				>
					<LetrasDireccion Y={266} X={100} inicio={105} />

					<div
						style={{
							transform: `translateX(20px) translateY(209px)`,
						}}
					>
						<LupaLogo />
						<Caret />
						<div
							style={{
								position: 'absolute',
								transform: `translateX(440px) translateY(-112px)`,
							}}
						>
							<Flechas />
						</div>
					</div>
				</div>
			</div>

			<Sequence from={35} durationInFrames={400}>
				<CirclePop2
					positionX={250}
					positionY={350}
					rotacion={0}
					duracionCaja={400}
					size={800}
					texto="Ingresamos al portal SAT"
					imagenX={0}
					imagenY={90}
					fuenteSize={40}
				/>
			</Sequence>

			<Sequence from={300} durationInFrames={105}>
				<CompCursorClick2
					positionX={840}
					positionY={300}
					empiezaX={1300}
					empiezaY={800}
				/>
			</Sequence>

			<Sequence from={405} durationInFrames={200}>
				<CompCursorClick2
					positionX={1300}
					positionY={800}
					empiezaX={840}
					empiezaY={300}
				/>
			</Sequence>
		</div>
	);
};
