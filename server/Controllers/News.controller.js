import { db } from '../Config/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { errorCreator } from '../Utilities/Errors/createError.js';
import { sucessCreator } from '../Utilities/Success/createSucess.js';

export const registerNewsletter = async (req, res) => {
  const { email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    next(errorCreator(200, 'Invalid email'));
  }

  try {
    const newsletterDocRef = doc(db, 'newsletter', email);
    await setDoc(newsletterDocRef, { email });
    const sucessMessage = sucessCreator(200, 'You\'ve been added to the newsletter', {});
    return res.status(sucessMessage.statusCode).json(sucessMessage);
  } catch (err) {
    console.log(err);
    next(errorCreator(500, 'Something went wrong'));
  }
};
