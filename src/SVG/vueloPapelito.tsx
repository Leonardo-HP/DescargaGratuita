import {evolvePath} from '@remotion/paths';
import {
	Easing,
	interpolate,
	interpolateColors,
	random,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const VueloPapelito: React.FC<{
	children: React.ReactNode;
	x: number;
	y: number;
}> = ({children, x, y}) => {
	const frame = useCurrentFrame();

	const vueloX = interpolate(frame, [0, 20,250], [0, x/2, x], {
		easing: Easing.bezier(0.61, 1, 0.88, 1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const vueloY = interpolate(frame, [0, 20, 250], [0, y, -y + -y], {
		
		easing: Easing.bezier(0.61, 1, 0.88, 1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				transform: `translateX(${vueloX}px) translateY(${vueloY}px) `,
			}}
		>
			{children}
		</div>
	);
};
