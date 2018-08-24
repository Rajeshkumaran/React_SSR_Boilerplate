var initial_state = [];

// export const setInitialState = (value)=>{
//     initial_state = value
//     console.log('initial state is set ');
//     console.log(initial_state);
// }
const items = function(state=initial_state,action){

    
    switch(action.type){
        case 'HOME_REQUEST':
            return [...state,...action.payload]
            break;
        case 'ABOUT_REQUEST':
            return [...state,...action.payload]
            break;
        case 'CLEAR_FEED':
            var new_state = [...state];
            console.log(action.payload,new_state);
            new_state.map((loop)=>{
                console.log(loop);
                if(loop.RecieverId == action.payload[0] && loop.PostId == action.payload[1])
                {
                    return loop.Show = 0;
                }

            })
            return new_state;
           
            break;
        
    }
    return state;

}
export default items;
