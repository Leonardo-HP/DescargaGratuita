import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgHighlighter: React.FC<{
	ancho: number;
	largo: number;
	seed: number;
}> = ({ancho, largo,seed}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	
	const random2 = Math.trunc(random(ancho + 1) * 10) - 5 + 90;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
		M10,10    Q50,${random1}    ${random2},10  
   
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
					stroke="yellow"
					stroke-width="11"
					fill="none"
					z-index="-1"
					opacity="0.3"
				/>
			</svg>


			
		</div>
	);
};
