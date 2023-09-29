import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	useCurrentFrame,
} from 'remotion';

export const SvgCrossed: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 51;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 59;
	const random3 = Math.trunc(random(ancho + 3) * 10) - 5 + 50;
	const random4 = Math.trunc(random(ancho + 4) * 10) - 5 + 52;


	const frame = useCurrentFrame();
	const d = ` 
		M10,10    Q50,${random1}    90,90  
							Q${random2},50    10,10  
	
    M90,10    Q50,${random3}    10,90  
							Q${random4},50    90,10  
        

		`;

	const progress = interpolate(frame, [0, 300], [0,1 ]);




	const opacidad = interpolate(frame, [0, 25,26,50], [0.5, 1,1,0.5]);


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
					
				}}
			>
				<p>Crossed</p>
			</div>
		</div>
	);
};
