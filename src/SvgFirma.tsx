import {AbsoluteFill, Easing, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {
	SvgEmojiCirculo,
	SvgEmojiOjos,
	SvgEmojiSonrisa,
	SvgLeo,
	SvgLeoSub,
} from './SvgLeo';
import { TextoManchaMask } from './highlight.tsx/TextoManchaMask';

export const SvgFirma = () => {

	const frame = useCurrentFrame();



	const move = interpolate(frame, [360, 380,381,400], [50,60,60,50], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
      <AbsoluteFill>
      <Img src={staticFile('papel.jpg')} />
      </AbsoluteFill>
			<Sequence>
				<SvgLeo />
			</Sequence>
			<Sequence>
				<SvgLeoSub />
			</Sequence>
			<Sequence from={200}>
<div
style={{

  transform: `translateX(300px) translateY(${move}px)`
}}
>

				<SvgEmojiCirculo />
				<SvgEmojiOjos />
				<SvgEmojiSonrisa />

				
        </div>
      </Sequence>



      
		</div>
	);
};

