
const items = function(state={isAuthenticated:false},action){

    switch(action.type){
        case 'LOGIN_AUTHENTICATION':
        console.log('LOGIN_AUTHENTICATION called',action.payload)
        var new_obj = {...state};
        new_obj.isAuthenticated = action.payload;
        return new_obj;
        break;
    }
    return state;




}
export default items;