import {loadFont} from '@remotion/google-fonts/Oswald';
import {evolvePath} from '@remotion/paths';
import {useState} from 'react';
import {
	AbsoluteFill,
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
	children1: React.ReactNode;
	children2: React.ReactNode;
	children3: React.ReactNode;
}> = ({
	duracionCaja,
	altura,
	ancho,
	seed,
	children1,
	children2,
	children3,
	x,
	y,
	fontSize,
}) => {
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

	const progress = interpolate(
		frame,
		[0, duracion, duracion * 3, duracionCaja],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	/* Random */

	const d = `
  M 10, 10 S70, ${random1} 90,${random6}
           S30, ${random2} 10,${random7}
           S70, ${random3} 90,${random8}
           S30, ${random4} 10,${random9}
           S70, ${random5} 90,${random10}
  `;

	const mask = `Mask${random1}`;
	const maskUrl = `url(#${mask})`;
	const X = `${x}px`;
	const Y = `${y}px`;

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
				<mask id={mask}>
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

				<circle cx="50" cy="50" r="100" fill="#CC1E2C" mask={maskUrl} />

				<text
					x={X}
					y={Y}
					font-family={fontFamily}
					fontSize={fontSize}
					fill="white"
					mask={maskUrl}
				>
					<tspan x={X} dy="1.2em">
						{children1}
					</tspan>
					<tspan x={X} dy="1.2em">
						{children2}
					</tspan>
					<tspan x={X} dy="1.2em">
						{children3}
					</tspan>
				</text>
			</svg>


		</div>
	);
};
