const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false, location: "Landing.js", posts: [], displayArticles: false},
	    {id: 1, text: "Another item", done: false, location: "Landing.js", posts: [], displayArticles: false}
	],
	visibilityFilter: 'SHOW_ALL'
}, action) => {
	switch(action.type) {
		case 'loginToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Main.js"}]
			}
		case 'logoutToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Landing.js"}]
			}
		case 'goToProfileToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Profile.js"}]
			}
		case 'updateHeadlineToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Main.js",
					posts: [...posts, action.text]}]
			}
		case 'getArticlesToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Main.js", displayArticles:true}]
		}
		case 'goToLandingToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Landing.js"}]
			}
		case 'goToMainToDo':
			return { ...state, nextId: state.nextId + 1,
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, location: "Main.js"}]
			}

		case 'SET_VISIBILITY_FILTER':
			return { ...state, visibilityFilter: action.filter }
		default:
			return state
	}
}

export default Reducer
