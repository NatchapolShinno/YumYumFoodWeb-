import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

class Profile extends React.Component {
    constructor(props)
        {
        super(props)
        }


    render() {

        console.log(this.props.users);

        /*RECEIVED DATA:
        DOB: "2020-12-25"
        firstName: "Nantapat"
        initials: "NS"
        lastName: "Sittipatharanan"
        phone: "081-908-9866"*/
        if(this.props.users)
            {
            return(
                <div>
                    <h3>{this.props.users.firstName} &nbsp; &nbsp; {this.props.users.lastName}</h3>
                    <h1>THIS IS THE PROFILE PAGE!</h1>
                </div>
            );
            }
        else {
            return(
                <div>
                    Loading profile...
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    /*console.log("TEST" + state);*/
    const id = ownProps.match.params.id;
    console.log("ID " + id);
    const profile = state.firestore.data.users;
    console.log("PROFILE:");
    console.log(state.firestore.data.users);
    const users = profile? profile[id] : null;
    console.log(users);
    return {
      users: users
    }
  }
  
export default compose(
connect(mapStateToProps),
firestoreConnect(() => ["users"])
)(Profile);
  
