import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgCorcheteLeft: React.FC<{
	ancho: number;
	largo: number;
	seed: number;
}> = ({ancho, seed, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 90;
	const random3 = Math.trunc(random(ancho + 4) * 10) - 5 + 90;
	const random4 = Math.trunc(random(ancho + 5) * 10) - 5 + 90;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
		M80,10    Q85,${random1}    90,10  
							Q${random2},30    90,50  
							
							Q${random3},70   90,90
							Q85,${random4}   80,90
         
		`;
	let progress = 0;

	if (seed >= 1 && seed <= 2) {
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
		<div>
			<svg
				viewBox="0 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={largo}
			>
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="red"
					stroke-width="7"
					fill="none"
					opacity="0.8"
				/>
			</svg>
		</div>
	);
};

export const SvgCorcheteRight: React.FC<{
	ancho: number;
	largo: number;
	seed: number;
}> = ({ancho, seed, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 10;
	const random3 = Math.trunc(random(ancho + 3) * 10) - 5 + 10;
	const random4 = Math.trunc(random(ancho + 4) * 10) - 5 + 90;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const d = ` 

    M20,10    Q15,${random1}    10,10  
              Q${random2},30   10,50
							Q${random3},70    10,90
              Q15,${random4}    20,90
		`;

	let progress = 0;

	if (seed >= 1 && seed <= 2) {
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
		<div>
			<svg
				viewBox="0 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={largo}
			>
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="red"
					stroke-width="7"
					fill="none"
					opacity="0.8"
				/>
			</svg>
		</div>
	);
};
