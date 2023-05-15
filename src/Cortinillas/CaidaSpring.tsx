import {
	interpolate,
	useCurrentFrame,
	Easing,
} from 'remotion/.';

export const CaidaSpring: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const gira = interpolate(frame, [0, 50], [-90, 0], {
		easing: Easing.bezier(0.2, 1.32, 0.64, 1),
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
