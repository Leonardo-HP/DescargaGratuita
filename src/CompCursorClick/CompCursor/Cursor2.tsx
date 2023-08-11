import {AbsoluteFill, Img, staticFile} from 'remotion/.';

export const Cursor2: React.FC = () => {
	return (
		<Img
			src={staticFile('Cursor.png')}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};
