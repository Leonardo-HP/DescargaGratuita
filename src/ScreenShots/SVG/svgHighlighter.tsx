import {evolvePath} from '@remotion/paths';
import {
	Sequence,
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgHighlighter: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 30;
	const random3 = Math.trunc(random(ancho + 3) * 10) - 5 + 50;
	const random4 = Math.trunc(random(ancho + 4) * 10) - 5 + 70;

  const random5 = Math.trunc(random(ancho + 1) * 10) - 5 + 90;
	const random6 = Math.trunc(random(ancho + 2) * 10) - 5 + 90;
	const random7 = Math.trunc(random(ancho + 3) * 10) - 5 + 90;
	const random8 = Math.trunc(random(ancho + 4) * 10) - 5 + 90;

	const frame = useCurrentFrame();
	const d = ` 
		M10,10    Q50,${random1}    ${random5},10  
    M10,30    Q50,${random2}    ${random6},30  
    M10,50    Q50,${random3}    ${random7},50  
    M10,70    Q50,${random4}    ${random8},70   
      
		`;

	const progress = interpolate(frame, [0, 50], [0, 0.5]);

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div >
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
					opacity="0.5"
				/>
			</svg>

			<div
				style={{
					transform: ' translateY(-310px)',
					position: 'absolute',
					width: '300px',
					height: '100px',
					fontSize: '50px',
					color: 'black',
				}}
			>
        	<p style={{ fontSize: 20,
          	transform: ' translateX(30px)',
    
          }}>Lorem ipsum dolor,<br/><br/>  sit amet consectetur<br/><br/> adipisicing elit. <br/><br/>Quam recusandae </p>
				<p
				
				style={{
					transform: 'translateY(20px) translateX(-10px)'

				}}
				>Highlighter</p>
			</div>
		</div>
	);
};
