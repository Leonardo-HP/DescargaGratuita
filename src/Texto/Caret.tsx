import {interpolate, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Montserrat';

export const Caret = () => {
	const {fontFamily} = loadFont();

	const frame = useCurrentFrame();


	const variable = 165
	const variable2 = 120


	const X = interpolate(frame, [variable,variable+1,variable+5,variable+6,variable+10,variable+11,variable+15,variable+16,variable+20,variable+21,variable+25,variable+26,variable+30,variable+31,variable+35,variable+36,variable+40,variable+41,variable+45,variable+46,variable+50], [70,97,97,124,124,147,147,158,158,190,190,225,225,258,258,268,268,319,319,350,350], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacidad = interpolate(frame, [variable2,variable2+1,variable2+20,variable2+21,variable2+40,variable2+41,variable2+100,variable2+101,variable2+120,variable2+121,variable2+140,variable2+141,variable2+160,variable2+161], [0,1,1,0,0,1,1,0,0,1,1,0,0,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				display: 'flex',
				fontFamily,
				fontSize: '50px',
				transform: `translateX(${X}px) translateY(-59px) `,
				opacity: `${opacidad}`,
			}}
		>
			|
		</div>
	);
};
