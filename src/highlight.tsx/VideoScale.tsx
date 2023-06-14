import {
	interpolate,
	useCurrentFrame,
	Easing,
	AbsoluteFill,

} from 'remotion/.';

export const VideoScale: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {

	const frame = useCurrentFrame();

	const escala = interpolate(frame, [75, 90,240,265], [1, 1.8,1.8,1], {
		easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
		extrapolateRight: 'clamp',});
		const move = interpolate(frame, [75, 90,240,265], [0, 700,700,0], {
			easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
			extrapolateRight: 'clamp',
	});

	const moveY = interpolate(frame, [75, 90,240,260], [0, 350,350,0], {
		easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
		extrapolateRight: 'clamp',
});

	return (
		<AbsoluteFill
		style={{
			transform: `translateX(${move}px) translateY(${moveY}px) scale(${escala})`,
		}}
		
		>	
			{children}
		</AbsoluteFill>
	);
};

