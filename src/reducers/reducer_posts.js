import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';




export default function(state = {}, action) {

	switch (action.type){

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState =  { ...state,  };
			// newState[post.id] = post;
			// return newState;
				//ES6: Take all existing stateand add the post we fatched
			return { ...state, [action.payload.data.id]: action.payload.data };
		default:
			return state;
	}
}