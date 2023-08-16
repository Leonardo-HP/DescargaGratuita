import {interpolate, useCurrentFrame} from 'remotion';
import { Letra2 } from './Letra2';
export const Caret: React.FC<{
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
			<Letra2 inicio={0 + inicio}>h</  Letra2>
			<Letra2 inicio={5 + inicio}>t</  Letra2>
			<Letra2 inicio={10 + inicio}>t</ Letra2>
			<Letra2 inicio={15 + inicio}>p</ Letra2>
			<Letra2 inicio={20 + inicio}>s</ Letra2>
			<Letra2 inicio={25 + inicio}>:</ Letra2>
			<Letra2 inicio={30 + inicio}>/</ Letra2>
			<Letra2 inicio={35 + inicio}>/</ Letra2>
			<Letra2 inicio={40 + inicio}>w</ Letra2>
			<Letra2 inicio={45 + inicio}>w</ Letra2>
			<Letra2 inicio={50 + inicio}>w</ Letra2>
			<Letra2 inicio={55 + inicio}>.</ Letra2>
      <Letra2 inicio={60 + inicio}>s</ Letra2>
			<Letra2 inicio={65 + inicio}>a</ Letra2>
			<Letra2 inicio={70 + inicio}>t</ Letra2>
			<Letra2 inicio={75 + inicio}>.</ Letra2>
			<Letra2 inicio={80 + inicio}>g</ Letra2>
			<Letra2 inicio={85 + inicio}>o</ Letra2>
      <Letra2 inicio={90 + inicio}>b</ Letra2>
      <Letra2 inicio={95 + inicio}>.</ Letra2>
      <Letra2 inicio={100 + inicio}>m</Letra2>
      <Letra2 inicio={105 + inicio}>x</Letra2>











		</div>
	);
};
