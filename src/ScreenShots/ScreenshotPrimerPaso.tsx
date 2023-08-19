import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const PrimerPasoSSO = () => {
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('PrimerPasoSS1.png')}
					style={{
						transform: `scale(1.5) translateX(-40px) translateY(120px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};

export const PrimerPasoSS1 = () => {
	const frame = useCurrentFrame();
	const zoomIn = interpolate(frame, [0, 50], [1.5, 2.1], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const X = interpolate(frame, [0, 50], [-40, 100], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const Y = interpolate(frame, [0, 50], [120, 188], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('PrimerPasoSS1.png')}
					style={{
						transform: `scale(${zoomIn}) translateX(${X}px) translateY(${Y}px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};

export const PrimerPasoSS2 = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 1], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('PrimerPasoSS1.1.png')}
					style={{
						transform: `scale(2.1) translateX(100px) translateY(188px)`,
						opacity: `${opacidad}`,
						clipPath: 'inset(20% 0% 0% 0)',
					}}
				/>
			</Sequence>
		</div>
	);
};

export const PrimerPasoSS3 = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 7], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div style={{}}>
			<Sequence>
				<Img
					src={staticFile('PrimerPasoSS1.1.png')}
					style={{
						transform: `scale(2.1) translateX(100px) translateY(188px)`,
						opacity: `${opacidad}`,
					}}
				/>
			</Sequence>
		</div>
	);
};

export const PrimerPasoSS4 = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 10], [0, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('PrimerPasoSS2.png')}
					style={{
						transform: `scale(2.1) translateX(100px) translateY(188px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};

export const VerMas = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 7, 14], [0, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('verMas.png')}
			style={{
				transform: ` translateX(419px) translateY(508px)`,
				width: '600px',
				height: '40px',
				opacity: `${opacidad}`,
			}}
		/>
	);
};

export const LupaLogo = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 95, 96], [0, 1, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('lupaLogo.png')}
			style={{
				width: '50px',
				height: '50px',
				opacity: `${opacidad}`,
			}}
		/>
	);
};

export const Blanco = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 95, 96], [0, 1, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				width: '1280px',
				height: '720px',
			}}
		/>
	);
};

export const Flechas = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [300, 320, 390, 410], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const X = interpolate(frame, [300, 320, 390, 410], [-40, -10, -10, 60], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const X2 = interpolate(frame, [300, 320, 390, 410], [-60, -30, -30, 40], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<div
				style={{
					transform: `translateX(${X}px)`,
					position: 'absolute',
					opacity: `${opacidad}`,
				}}
			>
				<Img
					src={staticFile('Flecha.png')}
					style={{
						width: '50px',
						height: '50px',
					}}
				/>
			</div>
			<div
				style={{
					transform: `translateX(${X2}px)`,
					opacity: `${opacidad}`,
				}}
			>
				<Img
					src={staticFile('Flecha.png')}
					style={{
						width: '50px',
						height: '50px',
					}}
				/>
			</div>
		</div>
	);
};
