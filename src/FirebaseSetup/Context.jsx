import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
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
  const [fireUser, setFireUser] = useState(null);
  const [msg, setMsg] = useState({});
  const navigate = useNavigate();

  //auth change
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

  const problems = [
    {
      id: 1,
      question: "hello go to village",
      taskAttempted: false,
      options: ["option1", "option2", "option3", "option4"],
      score: 0,
    },
    {
      id: 2,
      question: "hello go to village",
      options: ["option1", "option2", "option3", "option4"],
      score: 0,
    },
    {
      id: 3,
      question: "hello go to village",
      taskAttempted: false,
      options: ["option1", "option2", "option3", "option4"],
      score: 0,
    },
    {
      id: 4,
      question: "hello go to village",
      taskAttempted: false,
      options: ["option1", "option2", "option3", "option4"],
      score: 0,
    },
  ];

  async function mUser(user) {
    const usersCollection = collection(fireStore, "users");
    const querySnapshot = await getDocs(
      query(usersCollection, where("email", "==", user.email))
    );

    // Check if any documents are returned by the query
    if (!querySnapshot.empty) {
      console.log("User already exists. No need to create a new one.");
      return; // Exit the function if user exists
    }

    const docData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      attempted: false,
      problems: problems,
      score: 0,
    };
    const fireUser = await addDoc(collection(fireStore, "users"), docData);
    if (fireUser) {
      console.log("user added suceessfully");
    } else {
      console.log("failed to add user");
    }
  }

  const getFireUser = async (userEmail) => {
    try {
      const usersCollection = collection(fireStore, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("email", "==", userEmail))
      );

      if (querySnapshot.empty) {
        console.log("No user found with the specified email.");
        return null;
      }

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched user data:", users[0]);
      return users[0];
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      return null;
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
      await mUser(user); // Make sure user is added
      setUser(user);
      navigate("/user");
      getFireUser(user.email).then((userData) => {
        if (userData.length > 0) {
          setFireUser(userData[0]);
          console.log("fireUser ", fireUser);
        }
      });
    } catch (error) {
      console.error("Error during Google sign-up:", error.message);
    }
  };

  // Adjust where you call getFireUser
  useEffect(() => {
    if (user) {
      getFireUser(user.email).then((userData) => {
        setFireUser(userData);
      });
    } else {
      setFireUser(null); // Explicitly handle the case where there is no user
    }
  }, [user]); // Ensure this effect runs only when `user` changes

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

  //modidy the score and attempted

  async function updateUserScoreAndAttempted(
    userEmail,
    newScore,
    newAttempted
  ) {
    // Reference to the users collection
    const usersCollection = collection(fireStore, "users");

    // Create a query to find the user by email
    const querySnapshot = await getDocs(
      query(usersCollection, where("email", "==", userEmail))
    );

    // Check if the user exists
    if (querySnapshot.empty) {
      console.log("No user found with the specified email.");
      return;
    }
    // console.log(userEmail, newScore, newAttempted);

    // Assuming email is unique and only one document should match
    const userDoc = querySnapshot.docs[0];

    // Reference to the specific user document
    const userDocRef = doc(fireStore, "users", userDoc.id);

    // Update the 'score' and 'attempted' fields
    await updateDoc(userDocRef, {
      score: newScore,
      attempted: newAttempted,
    });

    console.log("User score and attempted status updated successfully.");
  }

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

  return (
    <FirebaseContext.Provider
      value={{
        registerUser,
        signUpWithGoogle,
        user,
        logout,
        loginWithEmailPass,
        updateUserScoreAndAttempted,
        fireUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
