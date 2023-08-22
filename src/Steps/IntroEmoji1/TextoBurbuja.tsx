import {
	Easing,
	interpolate,
	interpolateColors,
	useCurrentFrame,
} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';

export const TextoPrimeraBurbuja = () => {
	const frame = useCurrentFrame();
	const {fontFamily} = loadFont();

	return (
		<div
			style={{
				fontFamily,
				fontSize: '250px',
				color: '#000000',
			}}
		>
			Hola!
		</div>
	);
};
export const BurbujaPuntosCarga = () => {
	const frame = useCurrentFrame();

	const salto1 = interpolate(frame, [50, 75, 100], [0, -50, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const salto2 = interpolate(frame, [70, 95, 120], [0, -50, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const salto3 = interpolate(frame, [95, 120, 145], [0, -50, 0], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				transform: 'translateX(200px) translateY(-200px)',
			}}
		>
			<div
				style={{
					transform: ` translateY(${salto1}px)`,
					position: 'absolute',
					height: '110px',
					width: '110px',
					borderRadius: '50% 50%',
					backgroundColor: 'white',
				}}
			/>
			<div
				style={{
					transform: `translateX(140px) translateY(${salto2}px)`,
					position: 'absolute',
					height: '110px',
					width: '110px',
					borderRadius: '50% 50%',
					backgroundColor: 'white',
				}}
			/>
			<div
				style={{
					transform: `translateX(280px)  translateY(${salto3}px)`,
					position: 'absolute',
					height: '110px',
					width: '110px',
					borderRadius: '50% 50% ',
					backgroundColor: 'white',
				}}
			/>
		</div>
	);
};

export const TextoSegundaBurbuja = () => {
	const {fontFamily} = loadFont();

	return (
		<div
			style={{
				fontFamily,
				fontSize: '250px',
				color: '#000000',
			}}
		>
			¿Listo para aprender  <br />
			a   
			descargar facturas?
		</div>
	);
};



export const TextoTerceraBurbuja = () => {
	const {fontFamily} = loadFont();

	const frame = useCurrentFrame();

	const ColorClick = interpolateColors(frame, [270, 271], ["#000000", "#ffffff"])




	return (
		<div
			style={{
				

				fontFamily,
				fontSize: `250px`,
				color: `${ColorClick}`,
			}}
		>
			Let's go!
		</div>
	);
};