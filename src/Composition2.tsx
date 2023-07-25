import {
	AbsoluteFill,
	Img,
	OffthreadVideo,
	Sequence,
	Video,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

import {Light} from './highlight.tsx/Light';
import {Caja} from './highlight.tsx/Caja';
import {VideoScale} from './highlight.tsx/VideoScale';

export const MyComposition2 = () => {
	return (
		<div>
			<Sequence>
				<AbsoluteFill style={{background: 'white'}} />
			</Sequence>

			<Sequence durationInFrames={600}>
				<OffthreadVideo
					src={staticFile('primeraParte.webm')}
					startFrom={900}
					style={{
						width: `1000px`,
						height: `650px`,
						transform: `translateX(-190px) translateY(-44px)`,
					}}
				/>
			</Sequence>

			<Sequence durationInFrames={2000} from={44}>
				<OffthreadVideo
					playbackRate={4}
					src={staticFile('primeraParte.webm')}
					style={{
						width: `1000px`,
						height: `650px`,
						transform: `translateX(-190px) translateY(-44px)`,
					}}
				/>
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<Light
						Height={19}
						Width={253}
						positionX={149}
						positionY={136}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={5}>
				<AbsoluteFill>
					<Light
						Height={19}
						Width={253}
						positionX={149}
						positionY={164}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={10}>
				<AbsoluteFill>
					<Light
						Height={19}
						Width={253}
						positionX={149}
						positionY={263}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={340} durationInFrames={55}>
				<VideoScale>
					<AbsoluteFill>
						<Caja
							Height={36}
							Width={66}
							positionX={342}
							positionY={286}
							duracionCaja={20}
							anchoDeLinea={4}
						/>
					</AbsoluteFill>
				</VideoScale>
			</Sequence>

			<Sequence from={420} durationInFrames={79}>
				<AbsoluteFill>
					<Caja
						Height={24}
						Width={132}
						positionX={26}
						positionY={196}
						duracionCaja={20}
						anchoDeLinea={4}
					/>
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
