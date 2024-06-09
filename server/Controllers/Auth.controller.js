import { auth, db } from '../Config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { errorCreator } from '../Utilities/Errors/createError.js';
import { sucessCreator } from '../Utilities/Success/createSucess.js';

export const signup = async (req, res, next) => {
  const { fullName, username, email, password } = req.body;

  if (!email || !password) {
    next(errorCreator(200, 'Missing details'));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    next(errorCreator(200, 'Invalid email'));
  }

  if (password.length < 8) {
    next(errorCreator(200, 'Short password'));
  }
  const newPassword = String(password.trim());

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response || !response.user || !response.user.uid) {
      next(errorCreator(200, 'Something went wrong'));
    }

    const { uid } = response.user;
    const userImage = createPhotoURL();
    const currentDate = new Date();
    const creationDate = currentDate.toLocaleDateString();

    const userDocRef = doc(db, 'users', uid);
    const fireUser = await setDoc(userDocRef, {
      fullName: fullName,
      username: username,
      photoURL: userImage,
      isVerified: false,
      modules: {},
      cubes: 25,
      creationDate: creationDate,
    });

    const userData = {
      uid: uid,
      email: email,
      fullName: fullName,
      username: username,
      isVerified: false,
      photoURL: userImage,
      creationDate: creationDate,
    };
    const sucessMessage = sucessCreator(200, 'Account created', { user: userData });
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errorCreator(200, 'Missing details'));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    next(errorCreator(200, 'Invalid email'));
  }

  const newPassword = String(password.trim());

  try {
    const response = await signInWithEmailAndPassword(auth, email, newPassword);
    if (!response || !response.user || !response.user.uid) {
      next(errorCreator(500, 'Something went wrong'));
    }

    const { uid } = response.user;
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await getDoc(userDocRef);
    const userData = {
      uid,
      email,
      isVerified: fireUser.data().isVerified,
      fullName: fireUser.data().fullName,
      username: fireUser.data().username,
      photoURL: fireUser.data().photoURL,
      creationDate: fireUser.data().creationDate,
    };
    const sucessMessage = sucessCreator(200, 'Login sucessful', { user: userData });
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    if (err.message.includes('auth/invalid-credential')) {
      next(errorCreator(200, 'Invalid credentials'));
    }
    next(errorCreator(500, 'Something went wrong'));
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


export const checkUserEmailVerification = async (req, res) => {
  const { email } = req.body;

  try {
    const userRecord = await auth.getUserByEmail(email);

    if (userRecord.emailVerified) {
      return res.status(200).json({ message: 'Email verified.' });
    } else {
      return res.status(400).json({ message: 'Email not verified.' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ message: 'User not found.' });
    } else {
      return res.status(500).json({ message: 'Internal server error.' });
    }
  }
};

const createPhotoURL = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  let photoURL = '';

  if (randomNumber === 1) {
    photoURL = 'https://raw.githubusercontent.com/developer-assets/public-hosting/main/freeLearningHub/Profiles/one.png'
  } else if (randomNumber === 2) {
    photoURL = 'https://raw.githubusercontent.com/developer-assets/public-hosting/main/freeLearningHub/Profiles/two.png'
  } else if (randomNumber === 3) {
    photoURL = 'https://raw.githubusercontent.com/developer-assets/public-hosting/main/freeLearningHub/Profiles/three.png'
  } else if (randomNumber === 4) {
    photoURL = 'https://raw.githubusercontent.com/developer-assets/public-hosting/main/freeLearningHub/Profiles/four.png'
  } else {
    photoURL = 'https://raw.githubusercontent.com/developer-assets/public-hosting/main/freeLearningHub/Profiles/five.png'
  }

  return photoURL;
};