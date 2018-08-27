const items = function(state={},action){
    switch(action.type){
        case 'PERSONAL_INFO':
         return {...action.payload}
         break;
    }
    return {...state}
}
export default items;