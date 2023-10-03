import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgFlecha2: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
	seed: number;
		color: string;
    duracion: number;
}> = ({color,ancho, largo, seed, stroke, duracion}) => {
	const random1 = Math.trunc(random( seed + 1) * 10) - 5 + 50;
	const random2 = Math.trunc(random( seed + 2) * 10) - 5 + 60;
	const random3 = Math.trunc(random( seed + 3) * 10) - 5 + 70;
	const random4 = Math.trunc(random( seed + 4) * 10) - 5 + 65;
	const random5 = Math.trunc(random( seed + 5) * 10) - 5 + 35;
	const random6 = Math.trunc(random( seed + 6) * 10) - 5 + 30;
	const random7 = Math.trunc(random( seed + 7) * 10) - 5 + 40;
	const random8 = Math.trunc(random( seed + 8) * 10) - 5 + 50;

	const random9  = Math.trunc(random(  seed + 9 ) * 10) - 5 + 50;
	const random10  = Math.trunc(random( seed + 10) * 10) - 5 + 60;
	const random11  = Math.trunc(random( seed + 11) * 10) - 5 + 70;
	const random12  = Math.trunc(random( seed + 12) * 10) - 5 + 64;
	const random13  = Math.trunc(random( seed + 13) * 10) - 5 + 35;
	const random14  = Math.trunc(random( seed + 14) * 10) - 5 + 30;
	const random15  = Math.trunc(random( seed + 15) * 10) - 5 + 40;
	const random16  = Math.trunc(random( seed + 16) * 10) - 5 + 50;

	const random17 = Math.trunc(random( seed + 17) * 10) - 5 + 50;
	const random18 = Math.trunc(random( seed + 18) * 10) - 5 + 60;
	const random19 = Math.trunc(random( seed + 19) * 10) - 5 + 70;
	const random20 = Math.trunc(random( seed + 20) * 10) - 5 + 64;
	const random21 = Math.trunc(random( seed + 21) * 10) - 5 + 35;
	const random22 = Math.trunc(random( seed + 22) * 10) - 5 + 30;
	const random23 = Math.trunc(random( seed + 23) * 10) - 5 + 40;
	const random24 = Math.trunc(random( seed + 24) * 10) - 5 + 50;

	const random25 = Math.trunc(random( seed +  25) * 10) - 5 + 10;
	const random26 = Math.trunc(random( seed +  26) * 10) - 5 + 35;
	const random27 = Math.trunc(random( seed +  27) * 10) - 5 + 60;
	const random28 = Math.trunc(random( seed +  28) * 10) - 5 + 76;
	const random29 = Math.trunc(random( seed +  29) * 10) - 5 + 75;
	const random30 = Math.trunc(random( seed +  30) * 10) - 5 + 60;
	const random31 = Math.trunc(random( seed +  31) * 10) - 5 + 35;
	const random32 = Math.trunc(random( seed +  32) * 10) - 5 + 10;

	const random33 = Math.trunc(random( seed + 33) * 10) - 5 + 10;
	const random34 = Math.trunc(random( seed + 34) * 10) - 5 + 35;
	const random35 = Math.trunc(random( seed + 35) * 10) - 5 + 60;
	const random36 = Math.trunc(random( seed + 36) * 10) - 5 + 76;
	const random37 = Math.trunc(random( seed + 37) * 10) - 5 + 75;
	const random38 = Math.trunc(random( seed + 38) * 10) - 5 + 60;
	const random39 = Math.trunc(random( seed + 39) * 10) - 5 + 35;
	const random40 = Math.trunc(random( seed + 40) * 10) - 5 + 10;

	const random41 = Math.trunc(random( seed + 41) * 10) - 5 + 10;
	const random42 = Math.trunc(random( seed + 42) * 10) - 5 + 35;
	const random43 = Math.trunc(random( seed + 43) * 10) - 5 + 60;
	const random44 = Math.trunc(random( seed + 44) * 10) - 5 + 76;
	const random45 = Math.trunc(random( seed + 45) * 10) - 5 + 75;
	const random46 = Math.trunc(random( seed + 46) * 10) - 5 + 60;
	const random47 = Math.trunc(random( seed + 47) * 10) - 5 + 35;
	const random48 = Math.trunc(random( seed + 48) * 10) - 5 + 10;



/**
 * 			Q ${random17} ${random41} 60 10 
	        Q ${random18} ${random42} 60 60 
	        Q ${random19} ${random43} 80 60
	        Q ${random20} ${random44} 50 90 
	        Q ${random21} ${random45} 20 60 
	        Q ${random22} ${random46} 40 60 
	        Q ${random23} ${random47} 40 10
	        Q ${random24} ${random48} 60 10
 */

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
	M 40 10 Q ${random1} ${random25} 60 10 
	        Q ${random2} ${random26} 60 60 
	        Q ${random3} ${random27} 80 60
	        Q ${random4} ${random28} 50 90 
	        Q ${random5} ${random29} 20 60 
	        Q ${random6} ${random30} 40 60 
	        Q ${random7} ${random31} 40 10
	        Q ${random8} ${random32} 60 10

	        Q ${random9 } ${random33} 60 10 
	        Q ${random10} ${random34} 60 60 
	        Q ${random11} ${random35} 80 60
	        Q ${random12} ${random36} 50 90 
	        Q ${random13} ${random37} 20 60 
	        Q ${random14} ${random38} 40 60 
	        Q ${random15} ${random39} 40 10
	        Q ${random16} ${random40} 60 10

		





		`;

	let progress = 0;

	if (seed >= 1 && seed <= 3  ) {
		progress = interpolate(frame, [0, duracion], [0, 1]);
	} else {
		progress = spring({
			fps,
			frame,
			config: {
				stiffness: 30,
			},
			durationInFrames: duracion,
		});
	}

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
			}}
		>
			<svg
				viewBox="0 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={largo}
						strokeLinecap="round"
			>
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke={color}
					stroke-width={stroke}
					fill="none"
				/>
			</svg>
		</div>
	);
};
