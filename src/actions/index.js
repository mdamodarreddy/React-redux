export const saveAnswer = (answer) => {
	console.log('saveAnswer', answer);
	return {
		type: 'SAVE_ANSWER',
		payload: answer
	}
}