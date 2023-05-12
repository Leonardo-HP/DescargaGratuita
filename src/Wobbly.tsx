import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	Video,
	interpolate,
	OffthreadVideo,
	Img,
	useCurrentFrame,
	Easing,
} from 'remotion/.';

export const Woobly = () => {
	const frame = useCurrentFrame();

	const gira = interpolate(frame, [0, 60], [-45, -45], {
		easing: Easing.bezier(.11,.46,.74,.97),
		extrapolateRight: 'clamp',
	});

	const grueso1 = interpolate(frame, [0, 5,10,30], [0, 9,9,0], {
		easing: Easing.bezier(.11,.46,.74,.97),
		extrapolateRight: 'clamp',
	});

	const grueso2 = interpolate(frame, [0, 10,15,30], [0, 9,9,0], {
		easing: Easing.bezier(.11,.46,.74,.97),
		extrapolateRight: 'clamp',
	});

	const grueso3 = interpolate(frame, [0, 15,20,30],[0, 9,9,0], {
		easing: Easing.bezier(.11,.46,.74,.97),
		extrapolateRight: 'clamp',
	});

	const grueso4 = interpolate(frame, [0, 20,25,30], [0, 9,9,0], {
		easing: Easing.bezier(.11,.46,.74,.97),
		extrapolateRight: 'clamp',
	});


	const escala = interpolate(frame, [0,5,10,15,20,25,30], [0.8,1.2,1.1,1,1.1,1.2,0.8], {
		extrapolateRight: 'clamp',
	});



	return (
		<div>
		
				


      	<div
					style={{
						transform: ` translate(600px, 100px)  `,
					}}
				>  
		
				<div
        style={{
					position: `absolute`,
				width: '50px',
        height: '50px',
				border: `9px solid grey`,
				borderTop: `${grueso1}px solid green `,
				borderLeft: `${grueso2}px solid green `,
				borderBottom: `${grueso3}px solid green `,
				borderRight: `${grueso4}px solid green `,


				borderRadius: `50px`,
         transform:`rotate(${gira}deg) scale(${escala} `
    
    
    }}
        
        />
</div>


		</div>
	);
};
