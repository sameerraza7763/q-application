import swal from "sweetalert";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
}
  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyC7dBJd0KDcAOqTJPjBGuFCFGAwYuWNv3M",
  authDomain: "qapp-2a6f2.firebaseapp.com",
  projectId: "qapp-2a6f2",
  storageBucket: "qapp-2a6f2.appspot.com",
  messagingSenderId: "700253992007",
  appId: "1:700253992007:web:9ceb825b4ba0f3520c6d62"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);





const signInGoogle = async () => {
  try {
    var provider = new GoogleAuthProvider();
    const result = await auth;
    await signInWithPopup(auth, provider);
    await addUserToDB();
    await swal("Congratulations!", "Loggined successfully!", "success");
  } catch (e) {
    console.log(e.message);
  }
};
console.log(auth);

// adding users to database
const addUserToDB = async () => {
  const uid = auth.currentUser.uid;
  var userProfile = { email: "", name: "", photoURL: "" };
  userProfile.email = auth.currentUser.email;
  userProfile.name = auth.currentUser.displayName;
  userProfile.photoURL = auth.currentUser.photoURL;

  return setDoc(doc(db, "users", uid), userProfile);
};









function companydetailindb(company, since, timing, starttime, endtime, address, userid, imageurl) {
  const userId = auth.currentUser.uid
  return addDoc(collection(db, "company"), {
    company: company,
    since: since,
    timing: timing,
    starttime: starttime,
    endtime: endtime,
    address: address,
    userid: userid,
    imageurl: imageurl

  }
  );

}




async function uploadImage(image) {

  const imagesRef = ref(storage, 'images/{image.name}');
  const snapshot = await uploadBytes(imagesRef, image)
  const url = getDownloadURL(snapshot.ref)
  return url
}












async function GetcompaniesFromDB() {

  const querySnapshot = await getDocs(collection(db, "company"));
  const company_array = []
  querySnapshot.forEach((doc) => {
    company_array.push({ id: doc.id, ...doc.data() })

  });
  // console.log(company_array)
  return company_array;
}















export default signInGoogle;

export {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getFirestore,
  doc,
  setDoc,
  swal,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  addUserToDB,
  companydetailindb,
  uploadImage,
  GetcompaniesFromDB,
  collection,
  getDocs
};
