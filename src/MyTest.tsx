import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	interpolateColors,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {LetrasDireccion} from './Texto/LetrasDireccion';
import {LupaLogo} from './ScreenShots/ScreenshotPrimerPaso';

export const MyTest = () => {
	const frame = useCurrentFrame();

	/* Cuando abre */
	const abre = interpolate(frame, [100, 200], [90, 10], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const X = interpolate(frame, [100, 200], [600, 270], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const color = interpolateColors(frame, [70, 80], ['#CC1E2C', 'white']);

	/// ///////////////////////////////////////////////////////////////

	/* Sube */
	const Y = interpolate(frame, [0, 60], [470, 0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	/// ///////////////////////////////////////////////////////////////

	/* Se va a la esquina */
	const escala = interpolate(frame, [400, 450], [1, 0.5], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const X2 = interpolate(frame, [400, 450], [0, -650], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const Y2 = interpolate(frame, [400, 450], [0, -550], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	/// ///////////////////////////////////////////////////////////////

	return (
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
				<LetrasDireccion Y={268} X={80} inicio={250} />

				<div
					style={{
						transform: `translateX(20px) translateY(207px)`,
					}}
				>
					<LupaLogo />
				</div>
			</div>
		</div>
	);
};
