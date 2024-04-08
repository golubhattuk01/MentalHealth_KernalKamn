import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

import {
  getStorage,
  uploadBytes,
  ref as stRef,
  getDownloadURL,
} from "firebase/storage";

import { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, set, onValue, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL,
};

// get location of a person
export const loc = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
  });
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);
const fireStorage = getStorage(firebaseApp);

//google section
const provider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  //register user codee
  const registerUser = async (username, password, displayName) => {
    return createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password,
      displayName
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //google method
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);

  const signUpWithGoogle = async () => {
    return signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logout = async () => {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        console.log("You've been signed out successfully!");
        navigate("/");
        // Redirect to login page or update UI accordingly
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  const writeUserData = async (email, password, userID) => {
    if (email === null || password === null) {
      console.log("can't save null value ");
      return;
    }
    set(ref(firebaseDB, "users/" + userID), {
      email,
      password,
    });
  };

  useEffect(() => {
    const starCountRef = ref(firebaseDB, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setMsg(snapshot.val());
      // updateStarCount(postElement, data);
    });
  }, []);

  const loginWithEmailPass = async (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //add new book

  const addbook = async (bookname, price, auther, logo) => {
    console.log(logo);
    console.log(logo.name);
    const imgRef = stRef(
      fireStorage,
      `/uploads/images/${Date.now()}-${logo.name}`
    );
    const path = await uploadBytes(imgRef, logo);
    const docData = {
      bookname: bookname,
      price: price,
      auther: auther,
      logoURL: path.ref.fullPath,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    const newbook = await addDoc(collection(fireStore, "books"), docData);
    if (newbook) {
      console.log("book added suceessfully");
    } else {
      console.log("failed to add book");
    }
  };

  const getImg = async (path) => {
    return await getDownloadURL(stRef(fireStorage, path));
  };
  // get docs
  const [toggle, setToggle] = useState(false);
  const getBooks = async () => {
    const docRef = collection(fireStore, "books");
    const mybook = await getDocs(docRef);

    if (mybook) {
      // console.log(mybook.docs[0].data().auther);
      setToggle(!toggle);
      return mybook;
    } else {
      console.log("No such document!");
    }
  };

  const getView = async (id) => {
    const docRef = doc(fireStore, "books", id);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      // console.log(docSnap.data());
      return docSnap;
    } else {
      console.log("No such document!");
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        registerUser,
        signUpWithGoogle,
        user,
        logout,
        writeUserData,
        msg,
        loginWithEmailPass,
        addbook,
        getBooks,
        getImg,
        setToggle,
        toggle,
        getView,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
