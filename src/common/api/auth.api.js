import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
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
                    // resolve({ message: "Loging Successfully Done!", user: user });
                    signOut(auth)
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
                    console.log(error.message);

                    if (errorCode.localeCompare("auth/invalid-login-credentials") === 0) {
                        reject({ message: "Invalid Email Or Password" })
                    }

                    reject({ message: error.message })
                });
        })

    } catch (error) {
        const errorMessage = error.message;

        return errorMessage;
    }
}


export const forgetAPI = (data) => {
    console.log(data);

    try {
        return new Promise(function (resolve, reject) {
            updateEmail(auth, data.email)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user);
                    sendPasswordResetEmail(auth.userCredential)
                        .then(() => {
                            console.log("Email Updated Succussfully!");
                            resolve({ message: "Email Updated Succussfully!" })
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        })

                    // Email updated!
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);

                    // if (errorCode.localeCompare("user.getIdToken is not a function") === 0) {
                    //     reject({ message: "Email Already Used." })
                    // }

                    console.log("Email Already Used.");
                    reject({ message: error.message })
                });
        })

    } catch (error) {
        const errorMessage = error.message;

        return errorMessage;
    }
}