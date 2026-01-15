
const user = {
    id: 1,
    profile: {
     //   fullname: 'John Doe',
        address: {
            city: 'Ubon'
        }
    }
};

//console.log(user.profile.fullname);

// if (user && user.profile.fullname !== undefined) {
//     console.log(user.profile.fullname);
// }

// const fullname = user?.profile?.fullname;
console.log(user?.profile?.fullname);