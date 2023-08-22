import {Img, staticFile} from 'remotion';

export const EmojiImagen = () => {
	return (
		<Img
			src={staticFile('Waving.png')}
			style={{
				height: '250px',
				width: '250px',
			}}
		/>
	);
};
