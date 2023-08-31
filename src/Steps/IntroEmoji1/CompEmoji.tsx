import {
	AbsoluteFill,
	Easing,
	Sequence,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import {ScreenShot1} from '../../ScreenShots/Screenshot1';
import {
	BurbujaCarga,
	PrimeraBurbuja,
	SegundaBurbuja,
	TerceraBurbuja,
} from './Burbujas';
import {BlancoBackground} from '../../Cortinillas/Colors';

export const CompEmoji = () => {
	const frame = useCurrentFrame();

	const entrada = interpolate(frame, [0, 100], [-1280, 0], {
		easing: Easing.elastic(0.7),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const salida = interpolate(frame, [300, 310], [450, 500], {
		easing: Easing.elastic(0.6),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const a = interpolate(frame, [300, 310], [1, 0], {
		easing: Easing.elastic(0.6),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const entrada2 = interpolate(frame, [150, 200], [-1280, 0], {
		easing: Easing.elastic(0.6),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const b = interpolate(frame, [310, 320], [0, 1], {
		easing: Easing.elastic(0.6),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const entrada3 = interpolate(frame, [310, 320], [500, 450], {
		easing: Easing.elastic(0.6),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [150, 200, 550], [1, 0.4, 0.4], {
		easing: Easing.elastic(0.7),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const centroY = interpolate(
		frame,
		[150, 200, 400, 450,500,540],[170, 150, 150, -1500,-1500,-3100],
		{
			easing: Easing.elastic(0.8),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const centroX = interpolate(frame, [550, 600], [0, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const movimiento = interpolate(frame, [550, 600], [0, 0], {
		easing: Easing.bezier(0, 0, 1, 1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<BlancoBackground />
			<div
				style={{
					transform: `scale(${escala}) translateY(${centroY}px) translateX(${centroX}px)`,

					position: 'absolute',
				}}
			>
				<Sequence >
					<div
						style={{
							transform: `translateY(-100px) translateX(${entrada}px)`,
							position: 'absolute',
						}}
					>
						<PrimeraBurbuja />
					</div>
				</Sequence>

				<Sequence from={150}>
					<div
						style={{
							transform: `translateY(${salida}px) translateX(${entrada2}px)`,
							opacity: a,
							position: 'absolute',
						}}
					>
						<BurbujaCarga />
					</div>
				</Sequence>

				<Sequence from={150}>
					<div
						style={{
							transform: `translateY(${entrada3}px) translateX(${entrada2}px)`,
							opacity: b,
							position: 'absolute',
						}}
					>
						<SegundaBurbuja />
					</div>
				</Sequence>

				<Sequence from={200}>
					<div
						style={{

							
							transform: `translateY(2600px) translateX(600px) `,
							position: 'absolute',
						}}
					>
						<TerceraBurbuja />
					</div>
				</Sequence>

			</div>
		</div>
	);
};
