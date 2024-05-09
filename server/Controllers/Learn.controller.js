import { updateDoc, doc } from "firebase/firestore";
import { db } from '../Config/firebase.js';

export const registerModule = async (req, res) => {
  const { uid, module} = req.body;

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