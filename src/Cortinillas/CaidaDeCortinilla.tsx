import {
	interpolate,
	useCurrentFrame,
	Easing,
} from 'remotion/.';

export const CaidaDeCortinilla: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const gira = interpolate(frame, [0, 30], [-90, 0], {
		easing: Easing.bezier(0.18, 0.8, 0.8, 0.85),
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				transform: `rotate(${gira}deg) `,
				transformOrigin: `bottom left`,
			}}
		>
			{children}
		</div>
	);
};
