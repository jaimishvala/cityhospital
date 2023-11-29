import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";


export const singupAPI = (data) => {
    console.log(data);

    try {
        return new Promise(function (resolve, reject) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    sendEmailVerification(auth.user)
                        .then(() => {
                            resolve("Email Verification Done.")
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, errorMessage);

                    if (errorCode.localeCompare(errorMessage) === "auth/email-already-in-use") {
                        resolve("Email Already Used.")
                    }
                })
        })

    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);

        return errorMessage;
    }
}