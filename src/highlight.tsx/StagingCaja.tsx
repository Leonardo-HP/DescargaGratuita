import {
	interpolate,
	useCurrentFrame,
	Easing,

} from 'remotion/.';

export const StagingCaja: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const gira = interpolate(frame, [0, 120], [-90, 0], {
		easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
		extrapolateRight: 'clamp',
	});
	return (
		<div>
			{children}
		</div>
	);
};

