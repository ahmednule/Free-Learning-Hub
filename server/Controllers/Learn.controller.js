import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Config/firebase.js';
import { errorCreator } from '../Utilities/Errors/createError.js';
import { sucessCreator } from '../Utilities/Success/createSucess.js';

export const registerModule = async (req, res, next) => {
  const { uid, module} = req.body;

  if(!uid) {
    next(errorCreator(200, 'Signin failure'));
  }

  if(!module) {
    next(errorCreator(200, 'Module not found'));
  }

  const languageProgress = {
    progress: 0
  };
  
  let pastCubes = await getCubes(uid);
  pastCubes += 5;

  try {
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await updateDoc(userDocRef, {
      [`modules.${module}`]: languageProgress,
      cubes: pastCubes,
    });
    const sucessMessage = sucessCreator(200, 'Module registered', {});
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

export const updateProgress = async (req, res, next) => {
  const { uid, module, progress } = req.body;

  if(!uid) {
    next(errorCreator(200, 'Signin failure'));
  }

  if(!module) {
    next(errorCreator(200, 'Module not found'));
  }

  let pastCubes = await getCubes(uid);
  pastCubes += 10;

  try {
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await updateDoc(userDocRef, {
      [`modules.${module}.progress.${progress}.done`]: true,
      cubes: pastCubes,
    });
    const sucessMessage = sucessCreator(200, 'Progress updated', {});
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

export const getUserProgress = async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    next(errorCreator(200, 'Signin failure'));
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (!userDocSnapshot.exists()) {
      next(errorCreator(200, 'User not found'));
    }
    const userData = userDocSnapshot.data();
    const sucessMessage = sucessCreator(200, 'Progress fetched', { progress: userData.modules });
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};

export const getCubes = async (uid) => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
      return;
    }
    const userData = userDocSnapshot.data();
    return userData.cubes;
  } catch (err) {
    console.log(err);
    return;
  }
};
