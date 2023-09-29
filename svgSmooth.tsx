import {evolvePath} from '@remotion/paths';
import {random, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SvgSmooth: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 10;
	const random3 = Math.trunc(random(ancho + 3) * 10) - 5 + 90;
	const random4 = Math.trunc(random(ancho + 4) * 10) - 5 + 90;
	const random5 = Math.trunc(random(ancho + 5) * 10) - 5 + 90;
	const random6 = Math.trunc(random(ancho + 6) * 10) - 5 + 90;
	const random7 = Math.trunc(random(ancho + 7) * 10) - 5 + 10;
	const random8 = Math.trunc(random(ancho + 8) * 10) - 5 + 10;
	const random9 = Math.trunc(random(ancho + 9) * 10) - 5 + 10;
	const random10 = Math.trunc(random(ancho + 10) * 10) - 5 + 10;
	const random11 = Math.trunc(random(ancho + 11) * 10) - 5 + 90;
	const random12 = Math.trunc(random(ancho + 12) * 10) - 5 + 90;
	const random13 = Math.trunc(random(ancho + 13) * 10) - 5 + 90;
	const random14 = Math.trunc(random(ancho + 14) * 10) - 5 + 90;
	const random15 = Math.trunc(random(ancho + 15) * 10) - 5 + 10;
	const random16 = Math.trunc(random(ancho + 16) * 10) - 5 + 10;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
		M10,10     S20,${random1}      50,10     S80,${random2}      90,10  
							 S${random3},20      90,50     S${random4},80      90,90   
						 	 S80,${random5}  	   50,90     S20,${random6}      10,90
							 S${random7},80      10,50     S${random8},20      10,10
							 S20,${random9}      50,10     S80,${random10}     90,10  
							 S${random11},20     90,50     S${random12},80     90,90   
							 S80,${random13}     50,90     S20,${random14}     10,90
							 S${random15},80     10,50     S${random16},20     10,10
		`;

	const progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});

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
					stroke="blue"
					stroke-width="1"
					fill="none"
					opacity={0.7}
				/>
			</svg>
			<div
				style={{
					transform: ' translateY(-100px)',
					position: 'absolute',
					width: '300px',
					height: '100px',
					fontSize: '50px',
					color: 'black',
					overflow: 'hidden',
				}}
			>
				<p>Smooth</p>
			</div>
		</div>
	);
};
