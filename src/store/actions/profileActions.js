export const updateProfile = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const userId = user.uid;


        const firestore = getFirestore();
        const firebase = getFirebase();
        const userRef = firestore.collection('users').doc(userId);

        userRef.update({firstName: user.firstName});
        userRef.update({lastName: user.lastName});
        userRef.update({phone: user.phone});
        userRef.update({DOB: user.DOB});
        userRef.update({initials: user.firstName[0] + user.lastName[0]});


        /*const res = await userRef.update(user.state.firstName);
        const res = await userRef.update(user.state.lastName);
        const res = await userRef.update(user.state.DOB);
        const res = await userRef.update(user.state.phone);*/
    }
}