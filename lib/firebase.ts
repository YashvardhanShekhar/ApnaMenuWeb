import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCd8VzrChLGC-uPIFYMI3Ow3ALM5PbwF0w",
	authDomain: "apnamenu-snap.firebaseapp.com",
	databaseURL:
		"https://apnamenu-snap-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "apnamenu-snap",
	storageBucket: "apnamenu-snap.firebasestorage.app",
	messagingSenderId: "1054196927034",
	appId: "1:1054196927034:web:9728feb0fc9b817d8dc303",
	measurementId: "G-4RSPQK47KD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchMenu : Menu = async (url: String) => {
	try {
		const docRef = doc(db, "restaurants", url);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
      return docSnap.data().menu;
		} else {
			console.error("No such document!");
		}
	} catch (err) {
    console.error(err);
	}
};
