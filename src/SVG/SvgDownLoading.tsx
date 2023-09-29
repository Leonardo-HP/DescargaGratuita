import { fontFamily, loadFont } from '@remotion/google-fonts/Montserrat';
import {evolvePath, reversePath} from '@remotion/paths';
import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgLoading: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
}> = ({ancho, largo, stroke}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = reversePath('M 62 17 A  1 1 0 0 0 59 101 A 1 1 0 0 0 63 17 Z');

	let progress = 0;
	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 150,
	});

	const {fontFamily} = loadFont();

	const move = interpolate(frame, [0, 25, 100, 125], [0, -25, -25, -50], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [5, 20, 100, 120], [0, 1, 1, 0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity2 = interpolate(frame, [130, 150], [0, 1], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const size = interpolate(frame, [130, 140], [35, 40], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const fuera1 = interpolate(frame, [300, 340], [1, 0.8], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const fuera2 = interpolate(frame, [300, 330], [1, 0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<Sequence>
			<div
				style={{
					transform: `scale(${fuera1})`,
					opacity: `${fuera2}`,
				}}
			>
				<svg
					viewBox="0 0 120 120"
					preserveAspectRatio="none"
					width={ancho}
					height={largo}
				>
					<path
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						d={d}
						stroke="#2d69cf"
						stroke-width={stroke}
						fill="none"
						style={{
							position: 'absolute',
						}}
					/>
				</svg>

				<Img
					src={staticFile('flecha-izquierda.png')}
					style={{
						height: `50px`,
						transform: `rotate(-90deg)  translateX(${move}px) translateY(-75px)`,
						position: 'absolute',
						opacity,
					}}
				/>

				<Img
					src={staticFile('checkMarkAzyk.png')}
					style={{
						height: `${size}px`,
						transform: `rotate(0deg)  translateX(-70px) translateY(30px)`,
						position: 'absolute',
						opacity: opacity2,
					}}
				/>
			</div>
		</Sequence>
	);
};



export const SvgLoadingFondo = () => {
	const frame = useCurrentFrame();

	const move = interpolate(frame, [0, 50, 380, 430], [150, 0, 0, 150], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


	const fuera3 = interpolate(frame, [40, 90,200,250],[30, 25,25,30], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const fuera4 = interpolate(frame, [210, 360], [30, 25], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


	const opacidad1 = interpolate(frame, [40, 90,200,250], [0, 1,1,0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacidad2 = interpolate(frame, [210, 360,361,400], [0, 1,1,0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
			<div
				style={{
					border: '#AFAFAF solid',
					position: 'absolute',
					filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
					borderRadius: '10px',
					transform: `translateX(0px) translateY(${move}px)`,
					background: '#DEDEDE',
					width: '300px',
					height: '150px',
					color: 'black',
					fontFamily,

					
				}}
			>
				<p
					style={{
						transform: `translateX(100px) translateY(${fuera3}px)`,
						position: 'absolute',
						opacity: `${opacidad1}`
					}}
				>
						Descargando...
				</p>
				<p
					style={{
						transform: `translateX(100px) translateY(${fuera4}px)`,
						position: 'absolute',
						opacity: `${opacidad2}`
					}}
				>
	
					Descarga completada
				</p>
		</div>
	);
};
