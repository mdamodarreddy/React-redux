export default function(state=null, action){
	switch(action.type){
		case "SAVE_ANSWER":
			return action.payload;
			break;
	}
	return state;
}