import {Img, staticFile, useCurrentFrame} from 'remotion/.';

export const CursorLogin1: React.FC = () => {
	const frame = useCurrentFrame();

	let textoVariable = 'Cursor.png';
	const numeroVariable = frame;

	switch (true) {
		case numeroVariable >= 48 && numeroVariable <= 260:
			textoVariable = 'TextoCursor.png';
			break;
		default:
			textoVariable = 'Cursor.png';
	}
	return (
		<Img
			src={staticFile(textoVariable)}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};


export const CursorLogin2: React.FC = () => {
	const frame = useCurrentFrame();

	let textoVariable = 'Cursor.png';
	const numeroVariable = frame;

	switch (true) {
		case  numeroVariable <= 10:
			textoVariable = 'TextoCursor.png';
			break;
		case numeroVariable >= 26 :
			textoVariable = 'TextoCursor.png';
			break;
		default:
			textoVariable = 'Cursor.png';
	}
	return (
		<Img
			src={staticFile(textoVariable)}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};



export const CursorLogin3: React.FC = () => {
	const frame = useCurrentFrame();

	let textoVariable = 'Cursor.png';
	const numeroVariable = frame;

	switch (true) {
		case numeroVariable >= 0 && numeroVariable <= 5:
			textoVariable = 'TextoCursor.png';
			break;
		case   numeroVariable <= 10:
			textoVariable = 'Cursor.png';
			break;

			case   numeroVariable >= 23:
				textoVariable = 'TextoCursor.png';
				break;
			
		default:
			textoVariable = 'Cursor.png';
	}
	return (
		<Img
			src={staticFile(textoVariable)}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};



export const CursorLogin4: React.FC = () => {
	const frame = useCurrentFrame();

	let textoVariable = 'Cursor.png';
	const numeroVariable = frame;

	switch (true) {
		case numeroVariable >= 1 && numeroVariable <= 7:
			textoVariable = 'TextoCursor.png';
			break;
		case numeroVariable >= 15 && numeroVariable <= 100:
			textoVariable = 'HandCursor.png';
			break;
		default:
			textoVariable = 'Cursor.png';
	}
	return (
		<Img
			src={staticFile(textoVariable)}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};



export const CursorLogin5: React.FC = () => {
	const frame = useCurrentFrame();

	let textoVariable = 'Cursor.png';
	const numeroVariable = frame;

	switch (true) {
		case numeroVariable >= 0 && numeroVariable <= 5:
			textoVariable = 'HandCursor.png';
			break;
		default:
			textoVariable = 'Cursor.png';
	}
	return (
		<Img
			src={staticFile(textoVariable)}
			style={{
				height: `30px`,
				width: `20px`,
			}}
		/>
	);
};

