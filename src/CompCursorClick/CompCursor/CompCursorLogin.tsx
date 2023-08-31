import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {Cursor2} from './Cursor2';
import { CursorLogin1, CursorLogin2, CursorLogin3, CursorLogin4, CursorLogin5 } from './CursorCustom';

export const CompCursorLogin1: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<CursorLogin1/> 
		</div>
	);
};

export const CompCursorLogin2: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<CursorLogin2 /> 
		</div>
	);
};


export const CompCursorLogin3: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<CursorLogin3 /> 
		</div>
	);
};


export const CompCursorLogin4: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<CursorLogin4 />  
		</div>
	);
};
export const CompCursorLogin5: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<CursorLogin5 /> 
		</div>
	);
};
