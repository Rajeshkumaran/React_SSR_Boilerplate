var initial_state = [];

export const setInitialState = (value)=>{
    initial_state = value
    console.log('initial state is set ');
    console.log(initial_state);
}
const items = function(state=initial_state,action){

    switch(action.type){
        case 'Add':
            return [...state,action.payload]
    }
    return state;

}
export default items;
