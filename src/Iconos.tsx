import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

const path = 'inset(0 5% 15% 0)';

export const Iconos1 = () => {
	return (
		<Img
			src={staticFile('Iconos1.png')}
			style={{
				position: 'absolute',
				clipPath: path,
			}}
		/>
	);
};

export const Iconos2 = () => {
	const frame = useCurrentFrame();
	return (
		<Img
			src={staticFile('Iconos2.png')}
			style={{
				position: 'absolute',
				opacity: interpolate(frame, [0, 25, 125, 150], [0, 1, 1, 0]),
				clipPath: path,
			}}
		/>
	);
};

export const Iconos3 = () => {
	const frame = useCurrentFrame();
	return (
		<Img
			src={staticFile('Iconos3.png')}
			style={{
				position: 'absolute',
				opacity: interpolate(frame, [0, 25, 125, 150], [0, 1, 1, 0]),
				clipPath: path,
			}}
		/>
	);
};

export const Iconos4 = () => {
	const frame = useCurrentFrame();
	return (
		<Img
			src={staticFile('Iconos4.png')}
			style={{
				position: 'absolute',
				opacity: interpolate(frame, [0, 25, 125, 150], [0, 1, 1, 0]),
				clipPath: path,
			}}
		/>
	);
};
