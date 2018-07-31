var initial_state={
    'HOME_REQUEST':0,
    'ABOUT_REQUEST':0
};
const items = function(state = initial_state,action){
    switch(action.type){
        case 'HOME_REQUEST':
            var new_state = state;
            new_state['HOME_REQUEST']=1
            return new_state;
            case 'ABOUT_REQUEST':
            var new_state = state;
            new_state['ABOUT_REQUEST']=1
            return new_state;
    }
    return state;
}
export default items;