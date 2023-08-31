import {
	Easing,
	Img,
	interpolate,
	interpolateColors,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {EmojiImagen} from './EmojiImagen';
import {
	BurbujaPuntosCarga,
	TextoPrimeraBurbuja,
	TextoSegundaBurbuja,
	TextoTerceraBurbuja,
} from './TextoBurbuja';

export const PrimeraBurbuja = () => {
	const frame = useCurrentFrame();
	const rotacion = interpolate(frame, [50, 70, 90, 110], [0, 2, -2, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const saludar = interpolate(frame, [50, 70, 90, 110], [850, 870, 830, 850], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cambioA = interpolate(frame, [300, 310], [0, 250], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cambioB = interpolate(frame, [300, 310], [250, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				width: '1280px',
				height: '490px',
				background: '#F2F2F2',
				borderRadius: `${cambioA}px 250px 250px ${cambioB}px`,
			}}
		>
			<div
				style={{
					transform: `translateX(${saludar}px) translateY(100px) rotate(${rotacion}deg)`,
				}}
			>
				<EmojiImagen />
			</div>
			<div
				style={{
					transform: ' translateX(160px) translateY(-170px)',
					position: 'absolute',
				}}
			>
				<TextoPrimeraBurbuja />
			</div>
		</div>
	);
};

export const BurbujaCarga = () => {
	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				width: '960px',
				height: '490px',
				background: '#ce1d2c',
				borderRadius: `0px 250px 250px 250px`,
			}}
		>
			<div
				style={{
					transform: ' translateX(650px) translateY(450px)',
				}}
			/>
			<div
				style={{
					transform: ' translateX(100px) translateY(450px)',
					position: 'absolute',
				}}
			>
				<BurbujaPuntosCarga />
			</div>
		</div>
	);
};

export const SegundaBurbuja = () => {
	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				width: '3000px',
				height: '960px',
				background: '#F2F2F2',
				borderRadius: '0% 250px 250px 250px',
			}}
		>
			<div
				style={{
					transform: ' translateX(250px) translateY(170px)',
					position: 'absolute',
				}}
			>
				<TextoSegundaBurbuja />
			</div>
		</div>
	);
};

export const TerceraBurbuja = () => {
	const frame = useCurrentFrame();

	const ColorClick = interpolateColors(
		frame,
		[270, 271],
		['#F2F2F2', '#ce1d2c']
	);

	const escala = interpolate(frame, [270, 280, 290], [1, 1.1, 1], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				transform: `scale(${escala})`,
				width: '2000px',
				height: '490px',
				background: `${ColorClick}`,
				border: '30px solid #ce1d2c',
				borderRadius: '250px 250px 250px 250px',
			}}
		>
			<div
				style={{
					transform: ' translateX(500px) translateY(80px)',
					position: 'absolute',
				}}
			>
				<TextoTerceraBurbuja />
			</div>
		</div>
	);
};
