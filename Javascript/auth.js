// Authentication 
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs,
    addDoc,deleteDoc,doc
} from 'firebase/firestore'
// import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
//  !
 const database=getFirestore();

// collection reference
const collectionRefrence=collection(database,'events')
// get the collection data
getDocs(collectionRefrence).then((snapshot)=>{
    // console.log(snapshot.docs)})
    let events=[];
    snapshot.docs.forEach((doc) => {
        events.push({...doc.data(),id:doc.id})
        
    });
    console.log(events)

}).catch(err=>{
    console.log(err.message)
})
// adding documents
// TODO: add function appears to only be working in the index.html file 
// TODO: fix the issue with the linking
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