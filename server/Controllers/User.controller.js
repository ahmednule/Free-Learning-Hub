import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase.js';
import { errorCreator } from '../Utilities/Errors/createError.js';
import { sucessCreator } from '../Utilities/Success/createSucess.js';

export const getCubes = async (req, res, next) => {
  const { uid } = req.body;

  if (!uid) {
    next(errorCreator(500, 'Something went wrong'));
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (!userDocSnapshot.exists()) {
      next(errorCreator(200, 'User not found'));
    }
    const userData = userDocSnapshot.data();
    const sucessMessage = sucessCreator(200, 'Cubes fetched', { cubes: userData.cubes });
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};
