import { auth, provider, db } from '../Config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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
      return res.status(500).json({ msg: 'Invalid email or password.' });
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
    return res.status(201).json({ message: 'User logged in successfully.', user: userData });

  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
}

export const logout = async () => {
  try {
    await signOut(auth);
    return res.status(201).json({ message: 'User logged out successfully.' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
}