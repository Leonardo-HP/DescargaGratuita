import {loadFont} from '@remotion/google-fonts/Oswald';
import {evolvePath} from '@remotion/paths';
import {interpolate, useCurrentFrame} from 'remotion';

export const TextoManchaMask1: React.FC<{
	duracionCaja: number;
	altura: number;
	ancho: number;
	x: number;
	y: number;
	fontSize: number;
	children: React.ReactNode;
}> = ({duracionCaja, altura, ancho, children, x, y, fontSize}) => {
	const {fontFamily} = loadFont();

	const duracion = duracionCaja / 4;

	const frame = useCurrentFrame();

	const progress = interpolate(
		frame,
		[0, duracion, duracion * 3, duracion * 4],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const d = `
  M 10, 10 S70,12 90,17
           S30,24 10,32
           S70,35 90,38
           S30,44 10,46
           S70,59 90,56
  `;

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
			}}
		>
			<svg
				viewBox="-10 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={altura}
			>
				<mask id="myMask1">
					<path
						d={d}
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						stroke="white"
						stroke-width="18"
						strokeLinecap="round"
						fill="none"
					/>
				</mask>

				<circle cx="50" cy="50" r="100" fill="#CC1E2C" mask="url(#myMask1)" />

				<text
					x={x}
					y={y}
					font-family={fontFamily}
					fontSize={fontSize}
					fill="white"
					mask="url(#myMask1)"
				>
					{children}
				</text>
			</svg>
		</div>
	);
};

export const TextoManchaMask2: React.FC<{
	duracionCaja: number;
	altura: number;
	ancho: number;
	x: number;
	y: number;
	fontSize: number;
	children: React.ReactNode;
}> = ({duracionCaja, altura, ancho, children, x, y, fontSize}) => {
	const {fontFamily} = loadFont();

	const duracion = duracionCaja / 4;

	const frame = useCurrentFrame();

	const progress = interpolate(
		frame,
		[0, duracion, duracion * 3, duracion * 4],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const d = `
  M 10, 10 S70,14 90,22
           S30,25 10,28
           S70,34 90,36
           S30,49 10,46
           S70,52 90,58
  `;

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
			}}
		>
			<svg
				viewBox="-10 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={altura}
			>
				<mask id="myMask">
					<path
						d={d}
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						stroke="white"
						stroke-width="18"
						strokeLinecap="round"
						fill="none"
					/>
				</mask>

				<circle cx="50" cy="50" r="100" fill="#CC1E2C" mask="url(#myMask)" />

				<text
					x={x}
					y={y}
					font-family={fontFamily}
					fontSize={fontSize}
					fill="white"
					mask="url(#myMask)"
				>
					{children}
				</text>
			</svg>
		</div>
	);
};



export const TextoManchaMask3: React.FC<{
	duracionCaja: number;
	altura: number;
	ancho: number;
	x: number;
	y: number;
	fontSize: number;
	children: React.ReactNode;
}> = ({duracionCaja, altura, ancho, children, x, y, fontSize}) => {
	const {fontFamily} = loadFont();

	const duracion = duracionCaja / 4;

	const frame = useCurrentFrame();

	const progress = interpolate(
		frame,
		[0, duracion, duracion * 3, duracion * 4],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const d = `
  M 10, 10 S70,12 90,17
           S30,24 10,32
           S70,35 90,38
           S30,44 10,46
           S70,59 90,56
  `;

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
			}}
		>
			<svg
				viewBox="-10 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={altura}
			>
				<mask id="myMask">
					<path
						d={d}
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						stroke="white"
						stroke-width="18"
						strokeLinecap="round"
						fill="none"
					/>
				</mask>

				<circle cx="50" cy="50" r="100" fill="#CC1E2C" mask="url(#myMask)" />

				<text
					x={x}
					y={y}
					font-family={fontFamily}
					fontSize={fontSize}
					fill="white"
					mask="url(#myMask)"
				>
					{children}
				</text>
			</svg>
		</div>
	);
};


//

/*	const randomX = [
		{
			key: 1,
			valor: [12, 24, 35, 44, 59, 17, 32, 38, 46, 56],
		},
		{
			key: 2,
			valor: [14, 25, 34, 49, 52, 22, 28, 36, 46, 58],
		},
		{
			key: 3,
			valor: [15, 24, 39, 42, 57, 18, 26, 36, 48, 56],
		},
		{
			key: 4,
			valor: [14, 29, 32, 47, 53, 16, 26, 38, 46, 63],
		},

		{
			key: 5,
			valor: [19, 22, 37, 43, 51, 16, 28, 36, 53, 55],
		},

		{
			key: 6,
			valor: [12, 27, 33, 41, 51, 18, 26, 43, 45, 61],
		},

		{
			key: 7,
			valor: [17, 23, 31, 41, 53, 16, 33, 35, 51, 60],
		},
		{
			key: 8,
			valor: [13, 21, 31, 43, 51, 23, 25, 51, 50, 62],
		},

		{
			key: 9,
			valor: [11, 21, 33, 41, 58, 15, 31, 40, 52, 59],
		},

		{
			key: 10,
			valor: [11, 23, 31, 48, 50, 21, 30, 42, 49, 62],
		},


			const a = randomX.find((a) => a.key === seed);
	const b = a?.valor[0];
	
	]; */
