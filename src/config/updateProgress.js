// import firebase from 'firebase/app';
// import 'firebase/firestore'; // Import Firestore if not already imported

// // Initialize Firebase if not already done
// // firebase.initializeApp(config);

export const sendProgress = async (lesson, userId) => {
//     try {
//         // Get a reference to the Firestore database
//         const db = firebase.firestore();

//         // Document reference for the user's progress
//         const progressRef = db.collection("progress").doc(userId);

//         // Fetch the current progress of the user
//         const doc = await progressRef.get();

//         // If the user document exists
//         if (doc.exists) {
//             const userData = doc.data();
//             let progress = userData.progress || {}; // Initialize progress object if not exists

//             // Update the progress for the lesson or add a new entry if it doesn't exist
//             progress[lesson] = true; // Assuming progress is represented by boolean values

//             // Update the user's progress document
//             await progressRef.set({ progress }, { merge: true });
//             console.log(`Progress for lesson '${lesson}' updated successfully.`);
//         } else {
//             // If the user document doesn't exist, create a new one
//             await progressRef.set({ progress: { [lesson]: true } });
//             console.log(`Progress for lesson '${lesson}' created successfully.`);
//         }
//     } catch (error) {
//         console.error("Error updating progress:", error);
//         // You can handle the error here or rethrow it for the calling function to handle
//         throw error;
//     }
};
