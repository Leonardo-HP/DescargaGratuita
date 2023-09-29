import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgLineaFlecha: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
	seed: number;
	color: string;

	x: number;
	y: number;
}> = ({color, ancho, largo, seed, stroke, x, y}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
					
M 71.159 4.998 S 107.104 16.728 39.376 7.269 S 14 11 16.885 10.849 C 16.311 10.12 16.174 9.377 14.589 8.553 C 15.344 9.376 16.425 9.735 17.457 11.537 Q 15.578 11.811 14.494 12.667`;

	let progress = 0;

	if (seed >= 1 && seed <= 15) {
		progress = interpolate(frame, [0, 30], [0, 1]);
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
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
				transform: `translateX(${x}px) translateY(${y}px)`,
			}}
		>
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
					stroke={color}
					stroke-width={stroke}
					fill="none"
				/>
			</svg>
		</div>
	);
};
