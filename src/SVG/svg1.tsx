import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Svg1: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	/**
	 Randomness 
  const random1  = Math.trunc(random(ancho + 1 ) * 10) - 5 +   10;  
	const random2  = Math.trunc(random(ancho + 2 ) * 10) - 5 +   10;
	const random3  = Math.trunc(random(ancho + 3 ) * 10) - 5 +   90;
	const random4  = Math.trunc(random(ancho + 4 ) * 10) - 5 +   90;
	const random5  = Math.trunc(random(ancho + 5 ) * 10) - 5 +   90;
	const random6  = Math.trunc(random(ancho + 6 ) * 10) - 5 +   90;
	const random7  = Math.trunc(random(ancho + 7 ) * 10) - 5 +   10;
	const random8  = Math.trunc(random(ancho + 8 ) * 10) - 5 +   10;
	const random9  = Math.trunc(random(ancho + 9 ) * 10) - 5 +   10;
	const random10 = Math.trunc(random(ancho + 10) * 10) - 5 +   10;
	const random11 = Math.trunc(random(ancho + 11) * 10) - 5 +   90;
	const random12 = Math.trunc(random(ancho + 12) * 10) - 5 +   90;
	const random13 = Math.trunc(random(ancho + 13) * 10) - 5 +   90;
	const random14 = Math.trunc(random(ancho + 14) * 10) - 5 +   90;
	const random15 = Math.trunc(random(ancho + 15) * 10) - 5 +   10;
	const random16 = Math.trunc(random(ancho + 16) * 10) - 5 +   10;


	const random9 = 10;
	const random10 = 10;
	const random11 = 90;
	const random12 = 90;
	const random13 = 90;
	const random14 = 90;
	const random15 = 10;
	const random16 = 10;

		M10,10    S30,${random9}    50,10   S70,${random10}  90,10 
		M90,10    S${random11},30    90,50   S90,${random12}  90,90
		M90,90    S70,${random13}    50,90   S30,${random14}  10,90 
		M10,90    S${random15} ,70   10,50   S${random16},30  10,10

	 */

	const random1 = 10;
	const random2 = 10;
	const random3 = 90;
	const random4 = 90;
	const random5 = 90;
	const random6 = 90;
	const random7 = 10;
	const random8 = 10;

	const frame = useCurrentFrame();
	const d = ` 
		M10,10    S30,${random1}    50,10   S70,${random2}  90,10 
	      S${random3},30    90,50   S90,${random4}  90,90
		    S70,${random5}    50,90   S30,${random6}  10,90 
		    S${random7} ,70   10,50   S${random8},30  10,10
		`;

	const progress = interpolate(frame, [0, 100], [0, 1]);

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div>
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
					stroke="currentColor"
					stroke-width="1"
					fill="none"
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
				<p>
					{random1}-{random2}-{random3}-{random4}
				</p>
			</div>
		</div>
	);
};
