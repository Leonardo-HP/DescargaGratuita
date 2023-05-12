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

export const MedioCirculo1 = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `rotate(90deg) `,
					width: '50px',
					height: '50px',
					border: `25px transparent `,
					borderTop: `25px solid white `,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};


export const MedioCirculo2 = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `rotate(90deg) `,
					width: '50px',
					height: '50px',
					border: `25px trasnparent `,
					borderTop: `25px solid blue `,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};

export const MedioCirculo3 = () => {


	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `rotate(90deg) `,
					width: '50px',
					height: '50px',
					border: `25px trasnparent `,
					borderTop: `25px solid blue `,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};

export const MedioCirculo4 = () => {


	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `rotate(90deg) `,
					width: '50px',
					height: '50px',
					border: `25px trasnparent `,
					borderTop: `25px solid white `,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};


export const MedioCirculoDoble1: React.FC = () => {


	return (
    <AbsoluteFill
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
      transform:`rotate(-45deg)`,		
      width: '50px',
      height: '50px',
      border: `25px solid blue`,
      borderLeft: `25px solid white `,
      borderTop: `25px solid white `,
      borderRadius: `50px`,
      }}
    />
  </AbsoluteFill>
	);
};

export const MedioCirculoDoble2: React.FC = () => {


	return (
    <AbsoluteFill
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
      transform:`rotate(-45deg) `,		
      width: '50px',
      height: '50px',
      border: `25px solid blue`,
      borderLeft: `25px solid white `,
      borderTop: `25px solid white `,
      borderRadius: `50px`,
      }}
    />
  </AbsoluteFill>
	);
};

export const MedioCirculoDoble3: React.FC = () => {


	return (
    <AbsoluteFill
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
      transform:`rotate(-45deg)`,		
      width: '50px',
      height: '50px',
      border: `25px solid white`,
      borderLeft: `25px solid blue `,
      borderTop: `25px solid blue `,
      borderRadius: `50px`,
      }}
    />
  </AbsoluteFill>
	);
};

export const MedioCirculoDoble4: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `rotate(-45deg) `,
					width: '50px',
					height: '50px',
					border: `25px solid white`,
					borderLeft: `25px solid blue `,
					borderTop: `25px solid blue `,
					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};
