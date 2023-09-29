import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Img, staticFile} from 'remotion';

export const Azul = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: '#6089e4',
			}}
		/>
	);
};

export const BlancoBackground = () => {
	return (
		<div
			style={{
				position: 'absolute',
				width: '1500px',
				height: '720px',
				background: 'white',
			}}
		/>
	);
};


export const Blanco3 = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [400, 410], [1, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				position: 'absolute',
				width: '1500px',
				height: '720px',
				background: 'white',
				opacity: `${opacidad}`,
			}}
		/>
	);
};



export const Blanco2 = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 20, 30], [0, 1, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				position: 'absolute',
				width: '1500px',
				height: '720px',
				background: 'white',
				opacity: `${opacidad}`,
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
				background: 'black',
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
				background: '#ce1d2c',
			}}
		/>
	);
};


export const VerdeGobierno = () => {
	return (
		<div
			style={{

transform: 'translateX(-50px)',
				position: 'absolute',
				width: '1500px',
				height: '720px',
				background: '#10241c',
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
				background: '#ce1d2c',
			}}
		/>
	);
};

export const BlancoCortina = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: 'white',
			}}
		/>
	);
};

export const BlancoFinal = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '720px',
				background: 'white',
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
					background: '#ce1d2c',
				}}
			/>
		</div>
	);
};

export const Ovalo = () => {
	return (
		<div
			style={{
				width: '1500px',
				height: '200px',
				transform: 'translate(-120px,450px)',
				background: 'white',
				borderRadius: '50% 50% 0%  0%',
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
