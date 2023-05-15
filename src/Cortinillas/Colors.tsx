import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Img, staticFile} from 'remotion';

export const Azul = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: `#6089e4`,
			}}
		/>
	);
};

export const Blanco = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: `white`,
			}}
		/>
	);
};

export const Gris = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: `black`,
			}}
		/>
	);
};

export const Rojo = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: `
#c21d1d`,
			}}
		/>
	);
};

export const RojoBF = () => {
	return (
		<div>
			<div
				style={{
					transform: `translate(-120px,-200px)`,
					width: '1580px',
					height: '720px',
					background: `
#ce1d2c`,
				}}
			/>
		</div>
	);
};

export const Ovalo = () => {
	return (
		<div
			style={{
				overflow: `visible`,
				width: '1500px',
				height: '200px',
				transform: `translate(-120px,450px)`,
				background: `white`,
				borderRadius: `50% 50% 0%  0%  `,
				position: 'absolute',
			}}
		/>
	);
};

export const TextoBXF: React.FC = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 40], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(0.5)  translate(0px ,-170px) `,
				width: '1280px',
				height: '720px',
				opacity: opacidad,
			}}
		>
			<Img src={staticFile('BXFLogo.png')} />;
		</AbsoluteFill>
	);
};

export const CuentaGratis: React.FC = () => {
	const frame = useCurrentFrame();
	const opacidad2 = interpolate(frame, [20, 25], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				width: '1280px',
				height: '720px',
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(0.8)  translate(0px ,290px)`,
				opacity: opacidad2,
			}}
		>
			<Img src={staticFile('CuentaGratis.png')} />;
		</AbsoluteFill>
	);
};

export const RojoBF2 = () => {
	return (
		<div
			style={{
				width: '1280px',
				height: '720px',

				background: `
#ce1d2c`,
				overflow: `hidden`,
			}}
		>
			<Img
				src={staticFile('BXFLogo.png')}
				style={{
					transform: `scale(0.5)  translate(665px, 400px)`,
				}}
			/>
			;
		</div>
	);
};
