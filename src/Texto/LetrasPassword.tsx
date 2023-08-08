import { interpolate, useCurrentFrame } from 'remotion';
import {Letra} from './Letra';
export const LetrasPassword: React.FC<{
	Y: number;
	X: number;
	inicio: number;
}> = ({Y, X,inicio}) => {
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				display: 'flex',
				transform: `translateX(${X}px) translateY(${Y}px)`,
				opacity: interpolate(frame, [inicio, inicio + 1], [0, 1]),
			}}
		>
			<Letra inicio={0+inicio}>*</Letra>
			<Letra inicio={5+inicio}>*</Letra>
			<Letra inicio={10+inicio}>*</Letra>
			<Letra inicio={15+inicio}>*</Letra>
			<Letra inicio={20+inicio}>*</Letra>
			<Letra inicio={25+inicio}>*</Letra>
			<Letra inicio={30+inicio}>*</Letra>
      <Letra inicio={30+inicio}><div style={{background: `white`, color:'white'}}>********</div></Letra>
		</div>
	);
};
