// Authentication 
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore,collection,onSnapshot,addDoc,deleteDoc,doc} from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzZXtyZOsYlVw6rv9zf09Mtdcsj8YC4vs",
    authDomain: "techinfo-10473.firebaseapp.com",
    projectId: "techinfo-10473",
    storageBucket: "techinfo-10473.appspot.com",
    messagingSenderId: "694478408923",
    appId: "1:694478408923:web:92acd067cbfb431efa10fe",
    measurementId: "G-4K76QZ2JWR"
  };
// * initialization 
 initializeApp(firebaseConfig);
//   databse reference

 const database=getFirestore();
// Auth reference
 const auth=getAuth();
// collection reference
const collectionRefrence=collection(database,'events')
// Real Time collection data
onSnapshot(collectionRefrence,(snapshot)=>{
    // console.log("data:"+snapshot.docs)
    let events=[];
    snapshot.docs.forEach((doc) => {
        events.push({...doc.data(),id:doc.id})
        
    });
})

// adding documents
const addEventForm=document.querySelector('.add-event-form')
addEventForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(collectionRefrence,{
        title:addEventForm.eventTitle.value,
        branch:addEventForm.branch.value,
        beginDate:addEventForm.startDate.value,
        endDate:addEventForm.endDate.value,
        description:addEventForm.description.value,
    }).then(()=>{
    addEventForm.reset();
}
    )
},false);


// //*  signup form listener
// const testSignupForm=document.querySelector('#signupForm');
// testSignupForm.addEventListener('submit',(e)=>{

//     e.preventDefault();
//     const emailvalue=testSignupForm.querySelector('#emailInput').value;
//     const passwordvalue=testSignupForm.querySelector('#passwordInput').value;
//     createUserWithEmailAndPassword(auth,emailvalue,passwordvalue).then((userCredential)=>{
//         console.log("succes");
//         console.log('the user is'+userCredential.user);
//         testSignupForm.reset();
//     }).catch((error)=>{
//         console.log("error");
//     })
// },false);

// // *signin form 
// const testSigninForm=document.querySelector('#signinForm');
// testSigninForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const signinemail=testSigninForm.querySelector('#emailInput').value;
//     const signinpassword=testSigninForm.querySelector('#passwordInput').value;
//     signInWithEmailAndPassword(auth,signinemail,signinpassword).then((userCredential)=>{
//         console.log('succes');
//         testSigninForm.reset();
//     }).catch((error)=>{
//         console.log("error");
//     })
// },false)
