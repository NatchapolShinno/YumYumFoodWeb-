export const createProject = (project) => {
    return(dispatch, getState, { gerFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Restaurants').add({
            ...project,
            authorFirstName: 'net',
            authorLastName: 'lastnet',
            authorID: 12345,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type:"CREATE_RESTAURANT", project});
        }).catch((err)=>{
            dispatch({ type: "CREATE_RESTAURANT_ERROR", err });
        })
        
    }

};