var initial_state={
    'VISITED_HOME':0,
    'VISITED_ABOUT':0,
    'VISITED_MYREQUESTS' :0
    
};
const items = function(state = initial_state,action){
    //console.log(action.type);
    switch(action.type){
        case '/HOME':
            var new_state = {...state};
            new_state['VISITED_HOME']=action.payload;
            return new_state;
            break;
        case '/ABOUT':
            var new_state = {...state};
            new_state['VISITED_ABOUT']=action.payload;
            return new_state;
            break;
        case '/MYREQUESTS':
            var new_state ={...state};
            new_state['VISITED_MYREQUESTS']=action.payload;
            return new_state;
            break;
        
    }
    return state;
}
export default items;