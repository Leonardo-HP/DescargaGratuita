import {AbsoluteFill} from 'remotion/.';

export const Dot: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					height: 15,
					width: 10,
					borderRadius: 14 / 2,
					backgroundColor: 'red',
				}}
			/>
		</AbsoluteFill>
	);
};
