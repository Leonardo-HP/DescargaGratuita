import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Sombra = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 50, 200, 250], [0, 0.5, 0.5, 0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<div
				style={{
					background: 'grey',
					width: '1280px',
					height: '350px',
					position: 'absolute',
					opacity,
					transform: 'translateX(0px) translateY(0px)',
				}}
			/>
			<div
				style={{
					background: 'grey',
					width: '950px',
					height: '35px',
					position: 'absolute',
					opacity,
					transform: 'translateX(0px) translateY(350px)',
				}}
			/>

			<div
				style={{
					background: 'grey',
					width: '350px',
					height: '335px',
					position: 'absolute',
					opacity,
					transform: 'translateX(0px) translateY(385px)',
				}}
			/>

			<div
				style={{
					background: 'grey',
					width: '740px',
					height: '335px',
					position: 'absolute',
					opacity,
					transform: 'translateX(540px) translateY(385px)',
				}}
			/>

			<div
				style={{
					background: 'grey',
					width: '190px',
					height: '310px',
					position: 'absolute',
					opacity,
					transform: 'translateX(350px) translateY(410px)',
				}}
			/>

			<div
				style={{
					background: 'grey',
					width: '150px',
					height: '35px',
					position: 'absolute',
					opacity,
					transform: 'translateX(1150px) translateY(350px)',
				}}
			/>
		</div>
	);
};

export const SombraIndividual = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [50, 100, 500, 550], [0, 0.5, 0.5, 0], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				background: 'grey',
				width: '1280px',
				height: '720px',
				position: 'absolute',
				opacity,
				transform: 'translateX(0px) translateY(0px)',
			}}
		/>
	);
};
