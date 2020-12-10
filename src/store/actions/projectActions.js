export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('Restaurants').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorID,
            createdAt: new Date(),

        }).then(() => {
            dispatch({ type:"CREATE_RESTAURANT", project});
        }).catch((err)=>{
            dispatch({ type: "CREATE_RESTAURANT_ERROR", err });
        })
        
    }

};

export const createReview = (review) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore
      .collection("Reviews")
      .add({
        title: review.title,
        restaurantID: review.restaurantID,
        reviewFirstName: profile.firstName,
        reviewLastName: profile.lastName,
        reviewID: authorID,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_REVIEW", review });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_REVIEW_ERROR", err });
      });
  };
};