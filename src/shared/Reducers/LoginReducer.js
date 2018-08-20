
const items = function (state = { isAuthenticated: false,UserId:null }, action) {

    switch (action.type) {
        case 'LOGIN_AUTHENTICATION':
            console.log('LOGIN_AUTHENTICATION called', action.payload)

            if(action.payload.isAuthenticated === 'true')
            {
            
                var new_obj = { ...state };
                new_obj = action.payload;
                return new_obj;
            }
            break;
         

    }
    return state;




}
export default items;