import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";


export const signupAPI = (data) => {
    console.log(data);

    try {
        return new Promise(function (resolve, reject) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)

                    const auth = getAuth()
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log("Email verification sent!");
                            resolve({ message: "Email verification sent!", user: user });
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);

                    if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                        reject({ message: "Email Already Used." })
                    } else if (errorCode.localeCompare("auth/weak-password") === 0) {
                        reject({ message: "The password must be 6 characters long or more." })
                    }

                    reject({ message: error.message });
                })
        })

    } catch (error) {
        const errorMessage = error.message;

        return errorMessage;
    }
}



export const signinAPI = (data) => {
    console.log(data);

    try {
        return new Promise(function (resolve, reject) {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                    signOut(auth.currentUser)
                        .then(() => {
                            console.log("Loging Successfully Done!");
                            resolve({ message: "Loging Successfully Done!", user: user });
                            // Sign-out successful.
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // An error happened.
                        });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        })

    } catch (error) {
        const errorMessage = error.message;

        return errorMessage;
    }
}