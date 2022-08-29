interface RepositoresState {
    loading: boolean;
    error:string | null;
    data: string[];
}

interface  SearchRepositoriesAction {
    type:'search_repositores';
}
interface  SearchRepositoriesSuccessAction {
    type:'search_repositories_success';
    payload: string[]
}
interface  SearchRepositoriesErrorAction {
    type:'search_repositories_error';
    payload: string;
}

// interface Action {
//     type: string;
//     payload:
//     SearchRepositoriesAction 
//     | SearchRepositoriesSuccessAction 
//     | SearchRepositoriesErrorAction;
// }

const reducer = (state:RepositoresState,action:SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction):RepositoresState =>{
    switch (action.type){
        case 'search_repositores':
            return {loading: true ,error:null, data: [] }
        
        case 'search_repositories_success':
            return {loading:false , error: null, data: action.payload}

        case 'search_repositories_error':
            return {loading:false , error: action.payload, data: []}

        default:
            return state;
    }
};

export default reducer;