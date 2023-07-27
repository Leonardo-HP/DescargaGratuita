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
import {CompClick} from './CompCursorClick/CompClick/CompClick';

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

			<Sequence durationInFrames={600} from={44}>
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

			<Sequence from={400} durationInFrames={45}>
				<VideoScale>
					<AbsoluteFill>
						<Caja
							Height={36}
							Width={67}
							positionX={342}
							positionY={285}
							duracionCaja={18}
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
						positionX={28}
						positionY={196}
						duracionCaja={20}
						anchoDeLinea={4}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={349}>
				<AbsoluteFill>
					<Img src={staticFile('ScreenshotLogin.png')} />
				</AbsoluteFill>
			</Sequence>

			<AbsoluteFill>
				<CompClick positionX={0} positionY={0} />
			</AbsoluteFill>

			<Sequence from={400}>
				<AbsoluteFill>
					<Img src={staticFile('ScreenshotLogin.png')} />
				</AbsoluteFill>
			</Sequence>

			




		</div>
	);
};
