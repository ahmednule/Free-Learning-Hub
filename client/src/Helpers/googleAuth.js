import { db } from '../Config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const generateUsername = (email, displayName) => {
  const emailUsername = email.split('@')[0].toLowerCase().replace('.', '');
  const displayNameUsername = displayName.split(' ')[0].toLowerCase();
  const randomString = Math.random().toString(36).substring(2, 7);
  const username = emailUsername + displayNameUsername + randomString;
  return username;
};

const signInWithGoogleHelper = async (uid, displayName, email, photoURL) => {
  const username = generateUsername(email, displayName);

  try {
    // Check if the user exists in Firestore
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // User exists, fetch user data
      const userData = userDocSnapshot.data();
      const userDataBack = {
        uid: uid,
        email: email,
        fullName: userData.fullName,
        username: userData.username,
        photoURL: userData.photoURL,
      };
      return userDataBack;
    } else {
      // User doesn't exist, create a new user
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, {
        fullName: displayName,
        username: username,
        photoURL: photoURL || "newUser.jpg",
        modules: {},
      });
      const userDataBackTwo = {
        uid: uid,
        email: email,
        fullName: displayName,
        username: username,
        photoURL: photoURL || "newUser.jpg",
      };
      return userDataBackTwo;
    }

  } catch (err) {
    console.error('Google authentication error:', err.message);
    return 'error';
  }
};

export { signInWithGoogleHelper };
