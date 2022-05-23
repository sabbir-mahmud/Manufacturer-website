import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useUser from "./useUser"
import generateToken from './useJwt';

const useSocial = () => {
    const { setError, setUser, setLoading } = useUser();
    // navigate to
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                const email = result.user.email;
                generateToken(email);
                toast.info("You are logged in!");
                setLoading(false);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))

    };

    const handleFacebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                const email = result.user.email;
                generateToken(email);
                toast.info("You are logged in!");
                setLoading(false);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }

    // logIn with github
    const handleGithubLogin = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const email = result.user.email;
                generateToken(email);
                setUser(result.user);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }



    return { handleFacebookLogin, handleGoogleSignIn, handleGithubLogin };
};

export default useSocial;