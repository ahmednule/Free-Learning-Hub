import { auth, db } from '../Config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { profilePhotoDummies } from '../Utilities/Data/Data.js';
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
    const response = await createUserWithEmailAndPassword(auth, email, newPassword);
    if (!response || !response.user || !response.user.uid) {
      next(errorCreator(500, 'Something went wrong'));
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
    const sucessMessage = sucessCreator(200, 'Logout sucessful', {});
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

export const checkUserEmailVerification = async (req, res, next) => {
  const { uid } = req.body;

  try {
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await getDoc(userDocRef);
    const isVerified = fireUser.data().isVerified;

    if (isVerified) {
      const sucessMessage = sucessCreator(200, 'Email verified', {});
      return res.status(sucessMessage.statusCode).json(sucessMessage);
    }
    next(errorCreator(200, 'Email not verified'));
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

const createPhotoURL = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  let photoURL = '';
  if (randomNumber === 1) {
    photoURL = profilePhotoDummies[0];
  } else if (randomNumber === 2) {
    photoURL = profilePhotoDummies[1];
  } else if (randomNumber === 3) {
    photoURL = profilePhotoDummies[2];
  } else if (randomNumber === 4) {
    photoURL = profilePhotoDummies[3];
  } else {
    photoURL = profilePhotoDummies[4];
  }
  return photoURL;
};