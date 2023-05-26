import {AbsoluteFill} from 'remotion/.';

export const Check = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: 'rotate(40deg) translate(-2px, -2px )',
			}}
		>
			<div
				style={{
					transform: ` translate(6px, -1px )`,
					width: '5px',
					height: '30px',
					background: `blue`,
					borderRadius: `50px`,
				}}
			/>
			<div
				style={{
					position: `absolute`,
					transform: `rotate(-80deg) translate(-11px, 1px )`,
					width: '5px',
					height: '18px',
					background: `blue`,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};
