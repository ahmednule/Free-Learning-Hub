import { db } from '../Config/firebase.js';
import { doc, setDoc } from 'firebase/firestore';

export const registerNewsletter = async (req, res) => {
  const { email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return res.status(400).json({ msg: 'Missing email.' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email address' });
  }

  try {
    const newsletterDocRef = doc(db, 'newsletter', email);
    await setDoc(newsletterDocRef, { email });
    return res.status(201).json({ message: 'You have been added to the newsletter list.' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ msg: "Couldn't add you to the newsletter list" });
  }
};