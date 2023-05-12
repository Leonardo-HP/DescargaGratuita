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
	Easing,
	useCurrentFrame,
} from 'remotion/.';
import {Marcador} from './Marcador';

export const Marcadores = () => {
	return (
		<AbsoluteFill>
			<Sequence>
				<AbsoluteFill
					style={{
						transform: `rotate(0deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={5}>
				<AbsoluteFill
					style={{
						transform: `rotate(30deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={10}>
				<AbsoluteFill
					style={{
						transform: `rotate(60deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={15}>
				<AbsoluteFill
					style={{
						transform: `rotate(90deg)`,
					}}
				>
					<Marcador/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={20}>
				<AbsoluteFill
					style={{
						transform: `rotate(120deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={25}>
				<AbsoluteFill
					style={{
						transform: `rotate(150deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={30}>
				<AbsoluteFill
					style={{
						transform: `rotate(180deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={35}>
				<AbsoluteFill
					style={{
						transform: `rotate(210deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={40}>
				<AbsoluteFill
					style={{
						transform: `rotate(240deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={45}>
				<AbsoluteFill
					style={{
						transform: `rotate(270deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={50}>
				<AbsoluteFill
					style={{
						transform: `rotate(300deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={55}>
				<AbsoluteFill
					style={{
						transform: `rotate(330deg)`,
					}}
				>
					<Marcador />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
