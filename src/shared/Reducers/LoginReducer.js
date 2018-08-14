
const items = function(state=[],action){

    switch(action.type){
        case 'LOGIN_AUTHENTICATION':
        var new_obj = {...state};
        new_obj.isAuthenticated = action.payload;
        return new_obj;
        break;
    }
    return state;




}
export default items;