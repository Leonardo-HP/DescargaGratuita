import {interpolate, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Montserrat';

export const CaretRFC = () => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const variable = 30
 
const letras = {
letra1:11,
letra2:13,
letra3:14,
letra4:13,
letra5:6,
letra6:13,
letra7: 6 ,
letra8:  14,
letra9:  5,
letra10: 14,
letra11: 13,
letra12: 12
}

  const espacio1 = letras.letra1
  const espacio2 = espacio1 + letras.letra2
  const espacio3 = espacio2 + letras.letra3
  const espacio4 = espacio3 + letras.letra4
  const espacio5 = espacio4 + letras.letra5
  const espacio6 = espacio5 + letras.letra6
  const espacio7 = espacio6 + letras.letra7
  const espacio8 = espacio7 + letras.letra8
  const espacio9 = espacio8 + letras.letra9
  const espacio10 = espacio9 + letras.letra10
	const espacio11 = espacio10 + letras.letra11
	const espacio12 = espacio11 + letras.letra12




  const variable2 = 0


	const X = interpolate(frame, [variable,variable+1,variable+5,variable+6,variable+10,variable+11,variable+15,variable+16,variable+20,variable+21,variable+25,variable+26,variable+30,variable+31,variable+35,variable+36,variable+40,variable+41,variable+45,variable+46,variable+50,variable+51,variable+55,variable+56,variable+65], [0,espacio1,espacio1,espacio2,espacio2,espacio3,espacio3,espacio4,espacio4,espacio5,espacio5,espacio6,espacio6,espacio7,espacio7,espacio8,espacio8,espacio9,espacio9,espacio10,espacio10,espacio11,espacio11,espacio12,espacio12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacidad = interpolate(frame, [variable2,variable2+1,variable2+20,variable2+21,variable2+30,variable2+31,variable2+100,variable2+101,variable2+120,variable2+121,variable2+140,variable2+141], [0,1,1,0,0,1,1,0,0,1,1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
	
		<div
			style={{
        position: 'absolute',
				display: 'flex',
				fontFamily,
				fontSize: '30px',
				transform: `translateX(${X}px) translateY(-10px) `,
				opacity: `${opacidad}`,
			}}
		>
			|

		</div>


	);
};


export const CaretPassword = () => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const variable = 30
 
const letras = {
letra1:11,
letra2:13,
letra3:14,
letra4:13,
letra5:6,
letra6:13,
letra7: 6 ,
letra8:  14,
letra9:  5,
letra10: 14,
letra11: 13,
letra12: 12
}

  const espacio1 = letras.letra1
  const espacio2 = espacio1 + letras.letra2
  const espacio3 = espacio2 + letras.letra3
  const espacio4 = espacio3 + letras.letra4
  const espacio5 = espacio4 + letras.letra5
  const espacio6 = espacio5 + letras.letra6
  const espacio7 = espacio6 + letras.letra7
  const espacio8 = espacio7 + letras.letra8
  const espacio9 = espacio8 + letras.letra9
  const espacio10 = espacio9 + letras.letra10
	const espacio11 = espacio10 + letras.letra11
	const espacio12 = espacio11 + letras.letra12

  const variable2 = 0

	const X = interpolate(frame, [variable,variable+1,variable+5,variable+6,variable+10,variable+11,variable+15,variable+16,variable+20,variable+21,variable+25,variable+26,variable+30,variable+31,variable+35,variable+36,variable+40,variable+41,variable+45,variable+46,variable+50,variable+51,variable+55,variable+56,variable+65], [0,espacio1,espacio1,espacio2,espacio2,espacio3,espacio3,espacio4,espacio4,espacio5,espacio5,espacio6,espacio6,espacio7,espacio7,espacio8,espacio8,espacio9,espacio9,espacio10,espacio10,espacio11,espacio11,espacio12,espacio12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacidad = interpolate(frame, [variable2,variable2+1,variable2+20,variable2+21,variable2+30,variable2+31,variable2+100,variable2+101,variable2+120,variable2+121,variable2+140,variable2+141], [0,1,1,0,0,1,1,0,0,1,1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
	
		<div
			style={{
        position: 'absolute',
				display: 'flex',
				fontFamily,
				fontSize: '30px',
				transform: `translateX(${X}px) translateY(-10px) `,
				opacity: `${opacidad}`,
			}}
		>
			|

		</div>


	);
};



export const CaretCaptcha = () => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const variable = 30
 
const letras = {
letra1:11,
letra2:13,
letra3:14,
letra4:13,
letra5:6,
letra6:13,
letra7: 6 ,
letra8:  14,
letra9:  5,
letra10: 14,
letra11: 13,
letra12: 12
}
  const espacio1 = letras.letra1
  const espacio2 = espacio1 + letras.letra2
  const espacio3 = espacio2 + letras.letra3
  const espacio4 = espacio3 + letras.letra4
  const espacio5 = espacio4 + letras.letra5
  const espacio6 = espacio5 + letras.letra6
  const espacio7 = espacio6 + letras.letra7
  const espacio8 = espacio7 + letras.letra8
  const espacio9 = espacio8 + letras.letra9
  const espacio10 = espacio9 + letras.letra10
	const espacio11 = espacio10 + letras.letra11
	const espacio12 = espacio11 + letras.letra12

  const variable2 = 0

	const X = interpolate(frame, [variable,variable+1,variable+5,variable+6,variable+10,variable+11,variable+15,variable+16,variable+20,variable+21,variable+25,variable+26,variable+30,variable+31,variable+35,variable+36,variable+40,variable+41,variable+45,variable+46,variable+50,variable+51,variable+55,variable+56,variable+65], [0,espacio1,espacio1,espacio2,espacio2,espacio3,espacio3,espacio4,espacio4,espacio5,espacio5,espacio6,espacio6,espacio7,espacio7,espacio8,espacio8,espacio9,espacio9,espacio10,espacio10,espacio11,espacio11,espacio12,espacio12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacidad = interpolate(frame, [variable2,variable2+1,variable2+20,variable2+21,variable2+30,variable2+31,variable2+100,variable2+101,variable2+120,variable2+121,variable2+140,variable2+141], [0,1,1,0,0,1,1,0,0,1,1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
        position: 'absolute',
				display: 'flex',
				fontFamily,
				fontSize: '30px',
				transform: `translateX(${X}px) translateY(-10px) `,
				opacity: `${opacidad}`,
			}}
		>
			|
		</div>
	);
};
