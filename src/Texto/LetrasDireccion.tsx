import {interpolate, useCurrentFrame} from 'remotion';
import {Letra2} from './Letra2';
export const LetrasDireccion: React.FC<{
	Y: number;
	X: number;
	inicio: number;
}> = ({Y, X, inicio}) => {
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				display: 'flex',
				transform: `translateX(${X}px) translateY(${Y}px) `,
				opacity: interpolate(frame, [inicio, inicio + 1], [0, 1]),
			}}
		>
			<Letra2 inicio={60 + inicio}>s</Letra2>
			<Letra2 inicio={65 + inicio}>a</Letra2>
			<Letra2 inicio={70 + inicio}>t</Letra2>
			<Letra2 inicio={75 + inicio}>.</Letra2>
			<Letra2 inicio={80 + inicio}>g</Letra2>
			<Letra2 inicio={85 + inicio}>o</Letra2>
			<Letra2 inicio={90 + inicio}>b</Letra2>
			<Letra2 inicio={95 + inicio}>.</Letra2>
			<Letra2 inicio={100 + inicio}>m</Letra2>
			<Letra2 inicio={105 + inicio}>x</Letra2>
		</div>
	);
};
