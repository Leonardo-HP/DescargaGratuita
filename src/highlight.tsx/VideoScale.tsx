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

	const escala = interpolate(frame, [20,25,26,30], [1, 1.1,1.1,1], {
		easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
		extrapolateRight: 'clamp',});

		const X = interpolate(frame, [20,25,26,30], [0, -7,-7,0], {
			easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
			extrapolateRight: 'clamp',});

			const Y = interpolate(frame, [20,25,26,30], [0, -10,-10,0], {
				easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
				extrapolateRight: 'clamp',});

	return (
		<AbsoluteFill
		style={{
			transform: `scale(${escala})   translateX(${X}px) translateY(${Y}px) `,
		}}
		
		>	
			{children}
		</AbsoluteFill>
	);
};

