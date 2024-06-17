export default function fetchParams(pageUrl) {
	if (pageUrl.includes('?')) {
		const queryString = pageUrl.split('?')[1];
		const params = new URLSearchParams(queryString);
		const paramsObj = {};
		for (const [key, value] of params.entries()) {
			paramsObj[key] = value;
		}
		return paramsObj;
	}
	return {};
}
