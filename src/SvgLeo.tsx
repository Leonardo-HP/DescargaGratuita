import {evolvePath} from '@remotion/paths';
import {
	Easing,
	interpolate,
	interpolateColors,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgLeo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
	M 10.941 9.633 C 13.505 20.441 9.048 33.875 6.788 29.722 S 12.406 32.898 18.757 24.654 C 22.298 19.83 11.124 19.342 15.154 26.425 C 17.474 31.249 20.283 29.478 22.726 24.166 C 29.687 11.709 15.459 36.012 27.977 27.402 C 36.648 18.609 19.917 17.143 26.512 23.494 C 30.725 26.852 29.015 18.548 36.954 16.655 
         
		`;

		const Color = interpolateColors(frame, [150, 200], ["red","blue"]);


	let progress = 0;

	progress = interpolate(frame, [0, 50], [0, 1]);

	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				position: 'absolute',
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
			}}
		>
			<svg viewBox="0 0 100 100" width="1000px" height="1000px">
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke={Color}
					stroke-width="1"
					fill="none"
					opacity="0.8"
				/>
			</svg>
		</div>
	);
};

export const SvgLeoSub = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
	M 4.712 38.149 C 57.165 20.868 41.533 32.348 2.636 36.195       
		`;
		const Color = interpolateColors(frame, [150, 200], ["green","blue"]);
	let progress = 0;

	progress = interpolate(frame, [0, 50], [0, 1]);

	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute'
			}}
		>
			<svg viewBox="0 0 100 100" width="1000px" height="1000px">
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke={Color}
					stroke-width="1"
					fill="none"
					opacity="0.8"
				/>
			</svg>
		</div>
	);
};


export const SvgEmojiCirculo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();


	const Color = interpolate(frame, [150, 200], [0,1], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const d = ` 
	M 10.758 10.06 A 1 1 0 0 0 23.642 19.952 A 1 1 0 0 0 11.279 9.405 Z `;

	let progress = 0;

	progress = interpolate(frame, [0, 50], [0, 1]);

	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 100,
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute'
			}}
		>
			<svg viewBox="0 0 100 100" width="1000px" height="1000px">
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="Black"
					stroke-width="0.5"
					fillOpacity={Color}
					fill='yellow'
					opacity="1"
				/>
			</svg>
		</div>
	);
};


export const SvgEmojiOjos = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const Color = interpolate(frame, [150, 200], [0,1], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	})

	const d = ` 
	M 13.825 10.959 C 13.679 13.224 15.895 12.834 15.968 11.032 C 15.773 8.816 13.995 9.035 13.825 10.886 Z      
	
	M 19.304 11.008 C 19.255 13.467 22.08 13.102 22.007 11.081 C 21.91 9.23 19.523 9.06 19.304 10.91 Z 
	`;

	let progress = 0;

	progress = interpolate(frame, [0, 50], [0, 1]);

	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute'
			}}
		>
			<svg viewBox="0 0 100 100" width="1000px" height="1000px">
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="Black"
					stroke-width="0.5"
					fill="white"
					fillOpacity={Color}
					opacity="1"
				/>
			</svg>
		</div>
	);
};
export const SvgEmojiSonrisa = () => {




	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();


	const Sonrisa = interpolate(frame, [150, 200], [16, 20], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const d = ` 
	M 12.948 16.024 L 21.983 16.024 C 19.039 ${Sonrisa} 16.007 ${Sonrisa} 12.948 16 Z
		`;

	let progress = 0;

	progress = interpolate(frame, [0, 50], [0, 1]);

	progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute'
			}}
		>
			<svg viewBox="0 0 100 100" width="1000px" height="1000px">
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke="Black"
					stroke-width="0.5"
					fill="white"
					opacity="0.8"
				/>
			</svg>
		</div>
	);
};
