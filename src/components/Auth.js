import {auth,provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../styles/Auth.css";

import Cookies from "universal-cookie";
const cookies=new Cookies();    //cookies variable used to get,set an dremove cookies from your browser //cookies is reference to the instance of class Cookies provided by Cookies library

export const Auth=(props)=>{
    const {setIsAuth}=props;
    const signInWithGoogle=async()=>{//asynchronous function do its task without stopping execution of other parts of a program
        try{
        const result=await signInWithPopup(auth,provider);   //signInWithPopup:allows a user to sign in to your application using a pop-up window with a specified authentication provider //await: to pause the execution of the code in asynchronous fun until the asynchronous operation signInWithPopup(auth,provider); is complete
        cookies.set("auth-token",result.user.refreshToken);    //refereshToken: user can access the website without re-entering credentials everytime....unique for each user within a specific app//auth-token:name of cookie set by app...this name is same for all users of this app
        setIsAuth(true);
        } catch(err){   
            console.error(err);//if any error that will be printed on console
        }
    };

    return (
        <div className="auth">
            <h2>Welcome to Code and Chat, have fun.</h2>
            <p>In this application, you can collaborate with your friends on a code playground and chat with everyone in the room.</p>
            <button onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle}/> Sign In With Google</button>
        </div>
    );
};