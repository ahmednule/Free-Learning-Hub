import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase.js';

export const getCubes = async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ msg: 'User not found' });
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const userData = userDocSnapshot.data();

    return res.status(200).json({ cubes: userData.cubes });

  } catch (err) {
    console.error('Error fetching cubes:', err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }

};
