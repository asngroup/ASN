/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/axiosPublic/axiosPublic";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();




    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // signIn With Email Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


        // UpdateProfile

        const userUpdateProfile = (name, photo) =>{
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
              });
        }




    // logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);

            setLoading(false);

            if (currentUser) {
                const userInfo = { email: currentUser.email }

                // console.log(userInfo)

                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        userUpdateProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;