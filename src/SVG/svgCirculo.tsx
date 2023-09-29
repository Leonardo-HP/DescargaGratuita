import {evolvePath} from '@remotion/paths';
import {interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SvgCirculo: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
	seed: number;
}> = ({ancho,stroke, largo, seed}) => {
	const random1 = Math.trunc(random(seed + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(seed + 2) * 10) - 5 + 10;
	const random3 = Math.trunc(random(seed + 3) * 10) - 5 + 10;

	const random4 = Math.trunc(random(seed + 4) * 10) - 5 + 90;
	const random5 = Math.trunc(random(seed + 5) * 10) - 5 + 90;
	const random6 = Math.trunc(random(seed + 6) * 10) - 5 + 90;

	const random7 = Math.trunc(random(seed + 7) * 10) - 5 + 90;
	const random8 = Math.trunc(random(seed + 8) * 10) - 5 + 90;
	const random9 = Math.trunc(random(seed + 9) * 10) - 5 + 90;

	const random10 = Math.trunc(random(seed + 10) * 10) - 5 + 90;
	const random11 = Math.trunc(random(seed + 11) * 10) - 5 + 90;
	const random12 = Math.trunc(random(seed + 12) * 10) - 5 + 90;

	const random13 = Math.trunc(random(seed + 13) * 10) - 5 + 90;
	const random14 = Math.trunc(random(seed + 14) * 10) - 5 + 90;
	const random15 = Math.trunc(random(seed + 15) * 10) - 5 + 90;

	const random16 = Math.trunc(random(seed + 16) * 10) - 5 + 50;
	const random17 = Math.trunc(random(seed + 17) * 10) - 5 + 50;
	const random18 = Math.trunc(random(seed + 18) * 10) - 5 + 50;

	const random19 = Math.trunc(random(seed + 19) * 10) - 5 + 90;
	const random20 = Math.trunc(random(seed + 20) * 10) - 5 + 90;
	const random21 = Math.trunc(random(seed + 21) * 10) - 5 + 90;

	const random22 = Math.trunc(random(seed + 22) * 10) - 5 + 10;
	const random23 = Math.trunc(random(seed + 23) * 10) - 5 + 10;
	const random24 = Math.trunc(random(seed + 24) * 10) - 5 + 10;

	const random25 = Math.trunc(random(seed + 25) * 10) - 5 + 10;
	const random26 = Math.trunc(random(seed + 26) * 10) - 5 + 10;
	const random27 = Math.trunc(random(seed + 27) * 10) - 5 + 10;

	const random28 = Math.trunc(random(seed + 28) * 10) - 5 + 10;
	const random29 = Math.trunc(random(seed + 29) * 10) - 5 + 10;
	const random30 = Math.trunc(random(seed + 30) * 10) - 5 + 10;

	const random31 = Math.trunc(random(seed + 31) * 10) - 5 + 10;
	const random32 = Math.trunc(random(seed + 32) * 10) - 5 + 10;
	const random33 = Math.trunc(random(seed + 33) * 10) - 5 + 10;

	const random34 = Math.trunc(random(seed + 34) * 10) - 5 + 50;
	const random35 = Math.trunc(random(seed + 35) * 10) - 5 + 50;
	const random36 = Math.trunc(random(seed + 36) * 10) - 5 + 50;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const d = ` 
		M10,50    C${random1},${random4} ${random7},${random10}  ${random13},${random16}   C${random19},${random22} ${random25},${random28} ${random31},${random34}
              C${random2},${random5} ${random8},${random11}  ${random14},${random17}   C${random20},${random23} ${random26},${random29} ${random32},${random35}
              C${random3},${random6} ${random9},${random12}  ${random15},${random18}   C${random21},${random24} ${random27},${random30} ${random33},${random36}


    
		`;

	let progress = 0;

	if (seed >= 1 && seed <= 3 ) {
		progress = interpolate(frame, [0, 50], [0, 1]);
	} else {
		progress = spring({
			fps,
			frame,
			config: {
				stiffness: 30,
			},
			durationInFrames: 50,
		});
	}

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div style={{

			filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
		}}>
			<svg
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				width={ancho}
				height={largo}
			>
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="red"
					stroke-width={stroke}
					fill="none"
					opacity={0.7}
				/>
			</svg>
		</div>
	);
};
