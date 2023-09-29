import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const CortinaIkea = () => {
	const frame = useCurrentFrame();

	const move = interpolate(frame, [30, 70], [0, 100], {
    easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const move2 = interpolate(frame, [60,100 ], [100, 0], {
easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

  const move3 = interpolate(frame, [30,70], [0, 100], {
		easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const move4 = interpolate(frame, [60,100], [100, 100], {
		easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

  const movingAll = interpolate(frame, [0,150], [-2400, 1300], {
		easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});



	const move5 = interpolate(frame, [70,125], [0, 100], {
		easing: Easing.bezier(.31,.5,.58,.86),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


	return (
		<div style={{
height: '720px',
width:'2400px',
      transform: ` translateX(${movingAll}px)`,
			clipPath: `inset(0% -100% 0% ${move5}%)`
			
    }}>
      <div>

			<div
				style={{
					background: `#ce1d2c`,
					width: `1200px`,
					height: '500px',
					position: 'absolute',
				
		
				}}
			/>

			<div
				style={{
					transform: 'translateY(500px)',
					background: `white`,
					width: '1200px',
					height: '220px',
					position: 'absolute',
					clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
				}}
			/>
			<div
				style={{
					transform: 'translateY(500px)',
					background: `#ce1d2c`,
					width: `1200px`,
					height: '220px',
					position: 'absolute',
					clipPath: `polygon(0 0, 100% 0, ${move3}% ${move4}%, 0% 100%)`,
				}}
			/>
      </div>


      <div
      style={{


        transform: 'translateX(1200px)'
      }}
      
      >
			<div
				style={{
					background: `#ce1d2c`,
					width: '500px',
					height: '500px',
					position: 'absolute',
				}}
			/>
			<div
				style={{
					background: `#6089e4`,
					width: '1200px',
					height: '500px',
					position: 'absolute',
				}}
			/>

			<div
				style={{
					transform: 'translateY(500px)',
					background: `white`,
					width: '1200px',
					height: '220px',
					position: 'absolute',
					clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
				}}
			/>
			<div
				style={{
					transform: 'translateY(500px)',
					background: `#6089e4`,
					width: '1200px',
					height: '220px',
					position: 'absolute',
					clipPath: `polygon(0 0, 100% 0, 100% 100%, ${move}% ${move2}%)`,
				}}
			/>
      </div>
		</div>
	);
};
