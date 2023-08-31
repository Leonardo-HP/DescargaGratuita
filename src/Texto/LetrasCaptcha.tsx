import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Letra, LetraBlanco} from './Letra';
import {CaretCaptcha, CaretRFC} from './Carets';
export const LetrasCaptcha: React.FC<{
	Y: number;
	X: number;
}> = ({Y, X}) => {
	const frame = useCurrentFrame();
	return (
		<div>
			<Sequence>
				<div
					style={{
						display: 'flex',
						transform: `translateX(${X}px) translateY(${Y}px)`,
						opacity: interpolate(frame, [0, 1], [0, 1]),
						position: 'absolute',
					}}
				>
					<Letra inicio={0}> P</Letra>
					<Letra inicio={5}> S</Letra>
					<Letra inicio={10}>W</Letra>
					<Letra inicio={15}>H</Letra>
					<Letra inicio={20}>V</Letra>
					<Letra inicio={25}>W</Letra>
					<LetraBlanco inicio={30}>WWWWWWWWWW</LetraBlanco>
				</div>
			</Sequence>
			<Sequence>
				<div
					style={{
						transform: `translateX(${X}px) translateY(${Y}px)`,
					}}
				>
					<CaretCaptcha />
				</div>
			</Sequence>
		</div>
	);
};
