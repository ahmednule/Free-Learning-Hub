import { allModules } from '../../Data/Modules.js';

const createInProgress = (userData) => {
	if (userData.userProgress) {
		let moduleLinks = [];
		let moduleNames = [];
		let moduleUnique = [];
		let moduleProgress = [];
		let final = [];

		const tempNames = Object.keys(userData.userProgress);
		tempNames.map((name) => {
			if (name === 'html-css') {
				moduleLinks.push('/learn/html-css/basic-elements');
				moduleNames.push('HTML & CSS');
				moduleUnique.push(name);
				let progress = 0;
				progress = userData.userProgress;
				progress = getValuesForKey(progress, 'html-css');
				progress = progress[0].progress;
				progress = Object.keys(progress).length;
				progress = Math.round((progress / userData.htmlCss) * 100);
				moduleProgress.push(progress);
			} else if (name === 'python') {
				moduleLinks.push('/learn/python/basic-syntax');
				moduleNames.push('Python');
				moduleUnique.push(name);
				let progress = 0;
				progress = userData.userProgress;
				progress = getValuesForKey(progress, 'python');
				progress = progress[0].progress;
				progress = Object.keys(progress).length;
				progress = Math.round((progress / userData.python) * 100);
				moduleProgress.push(progress);
			} else {
				return [];
			}
		});

		moduleNames.forEach((name, index) => {
			const link = moduleLinks[index];
			const progress = moduleProgress[index];
			const unique = moduleUnique[index];
			final.push({ name, link, progress, unique });
		});

		const otherFinal = final.filter((obj) => obj.progress < 100);
		return otherFinal;
	} else {
		return [];
	}
};

const createIsCompleted = (userData) => {
	if (userData.userProgress) {
		let moduleLinks = [];
		let moduleUnique = [];
		let moduleNames = [];
		let moduleProgress = [];
		let final = [];

		const tempNames = Object.keys(userData.userProgress);
		tempNames.map((name) => {
			if (name === 'html-css') {
				moduleLinks.push('');
				moduleNames.push('HTML & CSS');
				moduleUnique.push(name);
				let progress = 0;
				progress = userData.userProgress;
				progress = getValuesForKey(progress, 'html-css');
				progress = progress[0].progress;
				progress = Object.keys(progress).length;
				progress = Math.round((progress / userData.htmlCss) * 100);
				moduleProgress.push(progress);
			} else if (name === 'python') {
				moduleLinks.push('/learn/python/basic-syntax');
				moduleNames.push('Python');
				moduleUnique.push(name);
				let progress = 0;
				progress = userData.userProgress;
				progress = getValuesForKey(progress, 'python');
				progress = progress[0].progress;
				progress = Object.keys(progress).length;
				progress = Math.round((progress / userData.python) * 100);
				moduleProgress.push(progress);
			} else {
				return [];
			}
		});

		moduleNames.forEach((name, index) => {
			const link = moduleLinks[index];
			const progress = moduleProgress[index];
			const unique = moduleUnique[index];
			final.push({ name, link, progress, unique });
		});

		const otherFinal = final.filter((obj) => obj.progress === 100);
		return otherFinal;
	} else {
		return [];
	}
};

const createAllModules = (userData) => {
	let moduleLinks = [];
	let moduleNames = [];
	let moduleUnique = [];
	let moduleProgress = [];
	let moduleType = [];
	let final = [];

	allModules.forEach((eachModule) => {
		const inProgress = createInProgress(userData);
		const isDone = createIsCompleted(userData);

		const progressModule = inProgress.find(
			(item) => item.unique === eachModule.unique
		);
		const completedModule = isDone.find(
			(item) => item.unique === eachModule.unique
		);

		if (progressModule) {
			moduleLinks.push(progressModule.link);
			moduleNames.push(progressModule.name);
			moduleUnique.push(progressModule.unique);
			moduleProgress.push(progressModule.progress);
			moduleType.push('progress');
		} else if (completedModule) {
			moduleLinks.push(completedModule.link);
			moduleNames.push(completedModule.name);
			moduleUnique.push(completedModule.unique);
			moduleProgress.push(completedModule.progress);
			moduleType.push('done');
		} else {
			if (eachModule.unique === 'html-css') {
				moduleLinks.push('/learn/register/1');
				moduleNames.push('HTML & CSS');
				moduleProgress.push(0);
				moduleUnique.push(eachModule.unique);
				moduleType.push('register');
			} else if (eachModule.unique === 'python') {
				moduleLinks.push('/learn/register/2');
				moduleNames.push('Python');
				moduleProgress.push(0);
				moduleUnique.push(eachModule.unique);
				moduleType.push('register');
			}
		}
	});

	moduleNames.forEach((name, index) => {
		const link = moduleLinks[index];
		const progress = moduleProgress[index];
		const unique = moduleUnique[index];
		const type = moduleType[index];
		final.push({ name, link, progress, unique, type });
	});

	return final;
};

const getValuesForKey = (obj, targetKey) => {
	const values = [];

	Object.keys(obj).forEach((key) => {
		if (key === targetKey) {
			values.push(obj[key]);
		}
	});

	return values;
};

export { createInProgress, createIsCompleted, createAllModules };
