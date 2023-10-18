import {evolvePath} from '@remotion/paths';
import {
	Easing,
	interpolate,
	interpolateColors,
	random,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgPapelito: React.FC<{
	seed: number;
	giro1: number;
	giro2: number;
}> = ({seed,giro1,giro2}) => {
	const random1 = Math.trunc(random(seed) * 4);
	const random2 = Math.trunc(random(seed + 1) * 4);

	const random3 = Math.trunc(random(seed + 2) * 7);
	const random4 = Math.trunc(random(seed + 3) * 7);

	const topLeftRandom = Math.trunc(random(+8) * 10) - 5;
	const topRighRandom = Math.trunc(random(+8) * 10) - 5;
	const botRightRandom = Math.trunc(random(+8) * 10) - 5;
	const botLeftRandom = Math.trunc(random(+8) * 10) - 5;

	const frame = useCurrentFrame();

	const time1 = Number(giro1);

	const time2 = Number(giro2);





	const topLeftX1 = interpolate(frame, [0, time1], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const topLefY1 = interpolate(frame, [0, time1], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const topLeftX2 = interpolate(frame, [0,time1], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const topLeftY2 = interpolate(frame, [0, time1], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const topRightX = interpolate(frame, [time1, time2], [90, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const topRightY = interpolate(frame, [time1, time2], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const botRightX = interpolate(frame, [0, time1], [90, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const botRightY = interpolate(frame, [0, time1], [90, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const botLeftX = interpolate(frame, [time1, time2], [10, 90], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const botLeftY = interpolate(frame, [time1, time2], [90, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const color = interpolateColors(
		frame,
		[time1/2,time1/2+1, time1+time1/2, time1+time1/2+1],
		[
			`hsla(${random1}${random3}0, 100%, 50%, 1)`,
			`hsla(${random2}${random4}0, 100%, 50%, 1)`,
			`hsla(${random2}${random4}0, 100%, 50%, 1)`,
			`hsla(${random1}${random3}0, 100%, 50%, 1)`,
		]
	);
	const colorA = `${color}`;

	const d = ` 
	M ${topLeftX1} ${topLefY1} 

	L ${topRightX} ${topRightY} 

	  ${botRightX} ${botRightY}
	
	L ${botLeftX} ${botLeftY} 
	
	L ${topLeftX2} ${topLeftY2} Z`;

	const suavidad = interpolate(
		frame,
		[26, 55, 85, 115, 145],
		[5, -5, 5, -5, 5],
		{
			easing: Easing.bezier(0.61, 1, 0.88, 1),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const grados = `${random1}${random3}0`;

	const gradosX = Number(grados);

	const rotacion = interpolate(frame, [0, 300], [0, gradosX], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				transform: `rotate(${rotacion}deg)`,
			}}
		>
			<svg
			
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				width="20px"
				height="20px"
				strokeLinecap="round"
			>
				<path d={d} fill={color} opacity={0.7} />
			</svg>
		</div>
	);
};
