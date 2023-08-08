import {interpolate, useCurrentFrame} from 'remotion';
import {Appear} from './Appear';
import {Letra} from './Letra';
export const LetrasRFC: React.FC<{
	Y: number;
	X: number;
	inicio: number;
}> = ({Y, X, inicio}) => {
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				display: 'flex',
				transform: `translateX(${X}px) translateY(${Y}px)`,
				opacity: interpolate(frame, [inicio, inicio + 1], [0, 1]),
			}}
		>
			<Letra inicio={0 + inicio}>A</Letra>
			<Letra inicio={5 + inicio}>B</Letra>
			<Letra inicio={10 + inicio}>C</Letra>
			<Letra inicio={15 + inicio}>0</Letra>
			<Letra inicio={20 + inicio}>1</Letra>
			<Letra inicio={25 + inicio}>0</Letra>
			<Letra inicio={30 + inicio}>1</Letra>
			<Letra inicio={35 + inicio}>0</Letra>
			<Letra inicio={40 + inicio}>1</Letra>
			<Letra inicio={45 + inicio}>X</Letra>
			<Letra inicio={50 + inicio}>Y</Letra>
			<Letra inicio={55 + inicio}>Z</Letra>
		</div>
	);
};
