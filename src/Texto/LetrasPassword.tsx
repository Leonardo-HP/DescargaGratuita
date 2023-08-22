import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Letra} from './Letra';
import {CaretRFC} from './Carets';
export const LetrasPassword: React.FC<{
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
					<Letra inicio={0}> *</Letra>
					<Letra inicio={5}> *</Letra>
					<Letra inicio={10}>*</Letra>
					<Letra inicio={15}>*</Letra>
					<Letra inicio={20}>*</Letra>
					<Letra inicio={25}>*</Letra>
					<Letra inicio={30}>*</Letra>
					<Letra inicio={35}>*</Letra>
					<Letra inicio={40}>*</Letra>
					<Letra inicio={45}>*</Letra>
					<Letra inicio={50}>*</Letra>
					<Letra inicio={55}>*</Letra>
				</div>
			</Sequence>
			<Sequence>
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
