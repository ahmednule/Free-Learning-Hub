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
        isVerified: userData.isVerified,
        fullName: userData.fullName,
        username: userData.username,
        photoURL: userData.photoURL,
        creationDate: userData.creationDate,
      };
      return userDataBack;
    } else {
      // User doesn't exist, create a new user

      const currentDate = new Date();
      const creationDate = currentDate.toLocaleDateString();
      const userImage = createPhotoURL();

      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, {
        fullName: displayName,
        username: username,
        isVerified: true,
        photoURL: photoURL || userImage,
        modules: {},
        creationDate: creationDate,
      });
      const userDataBackTwo = {
        uid: uid,
        email: email,
        isVerified: true,
        fullName: displayName,
        username: username,
        photoURL: photoURL || userImage,
        creationDate: creationDate,
      };
      return userDataBackTwo;
    }

  } catch (err) {
    console.error('Google authentication error:', err.message);
    return 'error';
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

export { signInWithGoogleHelper };
