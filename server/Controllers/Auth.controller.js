import { auth, provider, db } from '../Config/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, deleteDoc, updateDoc, doc, setDoc } from 'firebase/firestore';

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

}