import {AbsoluteFill, Img, staticFile} from 'remotion/.';

export const Cursor: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				src={staticFile('Cursor.png')}
				style={{
					height: `30px`,
				}}
			/>
		</AbsoluteFill>
	);
};
