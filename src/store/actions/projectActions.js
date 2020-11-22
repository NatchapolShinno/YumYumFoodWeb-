export const createProject = (project) => {
    return(dispatch, getState) => {
        dispatch({ type:"CREATE_RESTAURANT", project});
    }

};