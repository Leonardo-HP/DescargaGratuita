import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Letra} from './Letra';
import {CaretRFC} from './Carets';
export const LetrasRFC: React.FC<{
	Y: number;
	X: number;
}> = ({Y, X}) => {
	const frame = useCurrentFrame();
	return (
		<div>
			<Sequence >
				<div
					style={{
						display: 'flex',
						transform: `translateX(${X}px) translateY(${Y}px)`,
						opacity: interpolate(frame, [0, 1], [0, 1]),
						position: 'absolute',
					}}
				>
					<Letra inicio={0}>A</Letra>
					<Letra inicio={5}>B</Letra>
					<Letra inicio={10}>C</Letra>
					<Letra inicio={15}>0</Letra>
					<Letra inicio={20}>1</Letra>
					<Letra inicio={25}>0</Letra>
					<Letra inicio={30}>1</Letra>
					<Letra inicio={35}>0</Letra>
					<Letra inicio={40}>1</Letra>
					<Letra inicio={45}>X</Letra>
					<Letra inicio={50}>Y</Letra>
					<Letra inicio={55}>Z</Letra>
				</div>
			</Sequence>
			<Sequence >
				<div
					style={{
						transform: `translateX(${X}px) translateY(${Y}px)`,
					}}
				>
					<CaretRFC />
				</div>
			</Sequence>
		</div>
	);
};
