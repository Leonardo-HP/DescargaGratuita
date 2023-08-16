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
	const opacidad = interpolate(frame, [0, 7,14], [0, 1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
				<Img
					src={staticFile('verMas.png')}
					style={{
						transform: ` translateX(419px) translateY(508px)`,
						width:'600px',
						height:'40px',
						opacity: `${opacidad}`
					
					}}
				/>
	);
};



export const LupaLogo = () => {
	const frame = useCurrentFrame();
	const opacidad = interpolate(frame, [0, 7,14], [0, 1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
				<Img
					src={staticFile('lupaLogo.png')}
					style={{
						width:'50px',
						height:'50px',
						
					
					}}
				/>
	);
};




