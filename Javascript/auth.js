// Authentication 
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,onSnapshot,
    addDoc,deleteDoc,doc
} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";

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
// !initialization 
 initializeApp(firebaseConfig);
//   databse reference
 const database=getFirestore();
// Auth reference
 const auth=getAuth();
// collection reference
const collectionRefrence=collection(database,'events')
// Real Time collection data
onSnapshot(collectionRefrence,(snapshot)=>{
    let events=[];
    snapshot.docs.forEach((doc) => {
        events.push({...doc.data(),id:doc.id})
        
    });
})

// adding documents
const addEventForm=document.querySelector('.add-event-form')
addEventForm.addEventListener('submit',(e)=>{
    // preventdefault action which is resetting the form when submitting
    e.preventDefault()
    addDoc(collectionRefrence,{
        title:addEventForm.eventTitle.value,
        branch:addEventForm.branch.value,
        beginDate:addEventForm.startDate.value,
        endDate:addEventForm.endDate.value,
        description:addEventForm.description.value,


    }).then(()=>{
    addEventForm.reset() 
}
    )
})




//! event listener for the submit form
// !Sign up
const addUserForm=document.querySelector('#signup-form')
addUserForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=addUserForm.getElementById('email').value
    const password=addUserForm.getElementById('password').value

    // Create uesrs
    createUserWithEmailAndPassword(auth,email,password)
    .then( (userCredential)=> 
{
    console.log(userCredential.email)
    //signed in 
    const user=userCredential.user;

}
)
.catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
})

})
// ! log in 
const logUser=document.querySelector('#signInForm')
logUser.addEventListener('submit',(e)=>{
    e.preventDefault();
    
        const email=logUser.getElementById('signInEmail').value;
        const password=logUser.getElementById('signInPassword').value;
        // const password=logUser['signInPassword'].value
        console.log('you entered:')
        console.log(email,password)


   
    // signin
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    //signed in
    console.log(userCredential)
    const user=userCredential.user;
    // Error handling 
    }).catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
    console.log(errorCode,errorMessage);
})
})



// // authentication stream
// onAuthStateChanged(auth,(user)=>{
//     if (user) {
//             const uid=user.uid;
//     } else {
//         // alert('user signed out')
//     }
// })