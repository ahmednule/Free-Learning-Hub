import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Config/firebase.js';

export const registerModule = async (req, res) => {
  const { uid, module} = req.body;

  if(!uid) {
    return res.status(400).json({ msg: 'Signin to save' });
  }

  if(!module) {
    return res.status(400).json({ msg: 'Module not found' });
  }

  const languageProgress = {
    progress: 0
  };

  try {
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await updateDoc(userDocRef, {
      [`modules.${module}`]: languageProgress
    });

    return res.status(201).json({ message: 'Module registered successfully.' });

  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong.' });
  }

};

export const updateProgress = async (req, res) => {
  const { uid, module, progress } = req.body;

  if(!uid) {
    return res.status(400).json({ msg: 'Signin to save' });
  }

  if(!module) {
    return res.status(400).json({ msg: 'Module not found' });
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const fireUser = await updateDoc(userDocRef, {
      [`modules.${module}.progress`]: progress
    });

    return res.status(201).json({ message: 'Progress updated successfully.' });

  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong.' });
  }

};


export const getUserProgress = async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ msg: 'Sign in to fetch user data' });
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const userData = userDocSnapshot.data();

    return res.status(200).json(userData.modules);

  } catch (err) {
    console.error('Error fetching user data:', err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }
};