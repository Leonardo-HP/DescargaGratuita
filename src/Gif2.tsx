import {Sequence} from 'remotion';
import {CompCursorClick} from './CompCursorClick/CompCursorClick';
import {ScreenShot1} from './Gif2/Screenshot1';
import {LetrasCaptcha} from './Texto/LetrasCaptcha';
import {LetrasPassword} from './Texto/LetrasPassword';
import {LetrasRFC} from './Texto/LetrasRFC';

export const Gif2 = () => {
	return (
		<div>
			<ScreenShot1 />
			<LetrasRFC X={367} Y={294} inicio={0+30} />
			<LetrasPassword X={366} Y={334} inicio={57+30} />
			<LetrasCaptcha X={366} Y={515} inicio={88+30} />
			<Sequence from={100}>
				<CompCursorClick
					positionX={100}
					positionY={125}
					empiezaX={550}
					empiezaY={240}
				/>
			</Sequence>
		</div>
	);
};
