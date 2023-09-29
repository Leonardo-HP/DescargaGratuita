import {loadFont} from '@remotion/google-fonts/Oswald';
import {evolvePath} from '@remotion/paths';
import {useState} from 'react';
import {
	delayRender,
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const TextoManchaMask: React.FC<{
	duracionCaja: number;
	altura: number;
	ancho: number;
	seed: number;
	x: number;
	y: number;
	fontSize: number;
	children: React.ReactNode;
	delay: number;

}> = ({duracionCaja, altura, ancho, seed, children, x, y, fontSize, delay}) => {
	const duracion = duracionCaja / 4;

	const frame = useCurrentFrame();

	const seedx = seed;

	const random1 = Math.trunc(random(seedx + 1) * 10) - 5 + 15;
	const random2 = Math.trunc(random(seedx + 2) * 10) - 5 + 25;
	const random3 = Math.trunc(random(seedx + 3) * 10) - 5 + 35;
	const random4 = Math.trunc(random(seedx + 4) * 10) - 5 + 45;
	const random5 = Math.trunc(random(seedx + 5) * 10) - 5 + 55;
	const random6 = Math.trunc(random(seedx + 6) * 10) - 5 + 20;
	const random7 = Math.trunc(random(seedx + 7) * 10) - 5 + 30;
	const random8 = Math.trunc(random(seedx + 8) * 10) - 5 + 40;
	const random9 = Math.trunc(random(seedx + 9) * 10) - 5 + 50;
	const random10 = Math.trunc(random(seedx + 10) * 10) - 5 + 60;

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

	const progress = interpolate(frame, [0, 50, 150, 200], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	/* Random */

	const d = `
  M 10, 10 S70, ${random1} 90,${random6}
           S30, ${random2} 10,${random7}
           S70, ${random3} 90,${random8}
           S30, ${random4} 10,${random9}
           S70, ${random5} 90,${random10}
  `;

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	const {fontFamily} = loadFont();

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
