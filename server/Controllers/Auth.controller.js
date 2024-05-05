
export const signup = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  // Validate fullName
  if (!fullName) {
    return res.status(400).json({ msg: 'Missing details.' });
  }

  // Validate username
  if (!username) {
    return res.status(400).json({ msg: 'Missing details.' });
  }

  // Validate email
  if (!email) {
    return res.status(400).json({ msg: 'Missing details.' });
  }

  // Validate password
  if (!password) {
    return res.status(400).json({ msg: 'Missing details.' });
  }
  if (!password.length < 8) {
    return res.status(400).json({ msg: 'Short password.' });
  }

  // Encrypt password




}