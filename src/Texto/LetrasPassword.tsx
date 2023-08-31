import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Letra, LetraBlanco} from './Letra';
import {CaretPassword, CaretRFC} from './Carets';
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
					<LetraBlanco inicio={45}>*</LetraBlanco>
					<LetraBlanco inicio={50}>*</LetraBlanco>
					<LetraBlanco inicio={55}>*</LetraBlanco>
					<LetraBlanco inicio={60}>*</LetraBlanco>
					<LetraBlanco inicio={65}>*</LetraBlanco>
					<LetraBlanco inicio={70}>*</LetraBlanco>
					<LetraBlanco inicio={75}>*</LetraBlanco>
				</div>
			</Sequence>
			<Sequence>
				<div
					style={{
						transform: `translateX(${X}px) translateY(${Y}px)`,
					}}
				>
					<CaretPassword />
				</div>
			</Sequence>
		</div>
	);
};
