import Cookies from 'js-cookie';

export const saveUserDataToCookie = (userData) => {
	const { fullName, username, uid, email, photoURL, isVerified, creationDate } =
		userData;
	const expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 15);
	Cookies.set(
		'currentuserdata',
		JSON.stringify({
			fullName,
			username,
			uid,
			email,
			photoURL,
			isVerified,
			creationDate,
		}),
		{ expires: expiryDate, secure: true }
	);
};

export const fetchUserDataFromCookie = () => {
	const userDataString = Cookies.get('currentuserdata');
	if (!userDataString) {
		return null;
	}
	return JSON.parse(userDataString);
};

export const deleteUserCookie = () => {
	Cookies.remove('currentuserdata', { secure: true });
};
