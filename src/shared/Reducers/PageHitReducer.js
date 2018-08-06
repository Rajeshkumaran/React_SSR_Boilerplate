var initial_state={
    'HOME_REQUEST':0,
    'ABOUT_REQUEST':0,
    'CURRENT_LOCATION':''
};
const items = function(state = initial_state,action){
    switch(action.type){
        case 'HOME_REQUEST':
            var new_state = {...state};
            new_state['HOME_REQUEST']=1;
            return new_state;
            break;
        case 'ABOUT_REQUEST':
            var new_state = {...state};
            new_state['ABOUT_REQUEST']=1;
            return new_state;
            break;
        case 'CURRENT_LOCATION':
            var new_state = {...state};
            new_state['CURRENT_LOCATION']=action.payload;
            return new_state;
            break;
        
    }
    return state;
}
export default items;