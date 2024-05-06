import { auth, provider, db } from '../Config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc, query, where, getDocs } from 'firebase/firestore';

const generateUsername = (email, displayName) => {
  const emailUsername = email.split('@')[0].toLowerCase().replace('.', '');
  const displayNameUsername = displayName.split(' ')[0].toLowerCase();
  const randomString = Math.random().toString(36).substring(2, 7);
  const username = emailUsername + displayNameUsername + randomString;
  return username;
};

export const signupWithGoogle = async (req, res) => {
  try {
    const googleResponse = await signInWithPopup(auth, provider);

    if (!googleResponse || !googleResponse.user || !googleResponse.user.uid) {
      return res.status(401).json({ msg: 'Google authentication failed.' });
    }

    const { uid, displayName, email, photoURL } = googleResponse.user;
    const username = generateUsername(email, displayName);

    // Check if the user exists in Firestore
    const userQuery = query(db, 'users', where('uid', '==', uid));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      // User exists, fetch user data
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      return res.status(200).json({ message: 'User logged in with Google.', user: userData });
    } else {
      // User doesn't exist, create a new user
      const userDocRef = doc(db, 'users', uid);
      const fireUser = await setDoc(userDocRef, {
        fullName: fullName,
        username: username,
        photoURL: photoURL || "newUser.jpg",
      });
      return res.status(201).json({ message: 'User signed up with Google.', user: newUser });
    }
  } catch (error) {
    console.error('Google authentication error:', error.message);
    return res.status(500).json({ msg: 'Internal server error.' });
  }
};

export const signup = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return res.status(400).json({ msg: 'Missing details.' });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email address' });
  }

  // Validate password
  if (password.length < 8) {
    return res.status(400).json({ msg: 'Short password.' });
  }

  // Create user with google firebase
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);

    // Check if the registration was successful
    if (!response || !response.user || !response.user.uid) {
      return res.status(500).json({ msg: 'Failed to create user.' });
    }

    const { uid } = response.user;

    // Add extra data to Firestore
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await setDoc(userDocRef, {
      fullName: fullName,
      username: username,
      photoURL: "newUser.jpg",
    });

    const userData = {
      uid: uid,
      email: email,
      fullName: fullName,
      username: username,
      photoURL: "newUser.jpg",
    };
    return res.status(201).json({ message: 'User created successfully.', user: userData });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return res.status(400).json({ msg: 'Missing details.' });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email address' });
  }

  // Sign in user with email and password
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    if (!response || !response.user || !response.user.uid) {
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    const { uid } = response.user;
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await getDoc(userDocRef);
    const userData = {
      uid: uid,
      email: email,
      fullName: fireUser.data().fullName,
      username: fireUser.data().username,
      photoURL: fireUser.data().photoURL,
    };
    return res.status(200).json({ message: 'User logged in successfully.', user: userData });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    await signOut(auth);
    return res.status(200).json({ message: 'User logged out successfully.' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
};
