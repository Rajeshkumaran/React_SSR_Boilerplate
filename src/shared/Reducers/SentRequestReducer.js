const items = function(state=[],action){
    switch(action.type){
        
        case 'SENT_REQUESTS':
            console.log('Sent requests reducer called ...',action.payload);
            return [...action.payload];
            break;
    }
    return state;
}

export default items; 