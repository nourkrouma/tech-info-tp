// Authentication 
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore,collection,onSnapshot,addDoc,deleteDoc,doc, DocumentData, QueryDocumentSnapshot} from 'firebase/firestore';
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
// databse collection refrence
const eventsRefrence=collection(database,'events',)
const winnersRefrence=collection(database,'winners',)
onSnapshot(eventsRefrence,(snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        eventListFromFirestore(doc);
    })
})
onSnapshot(winnersRefrence,(snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        winnersListFromFirestore(doc);
    })
})
// * function to render the data from firesotre to event template
const eventsList=document.querySelector('.events');
function eventListFromFirestore(doc: QueryDocumentSnapshot<DocumentData>){
    // * fetching attributes from the list
    let li=document.createElement('li');
    // *li style
    li.style.paddingBottom='15px';
    li.style.paddingLeft='10px';
    li.style.margin='15px';
    li.style.backgroundColor='white';
    li.style.borderWidth='1px';
    li.setAttribute('eventId',doc.id);

    let title=document.createElement('div');
    // *title styles
    title.style.fontWeight="400";
    title.style.fontSize="28px";
    title.style.color="#FFAD05";
    title.style.textTransform="capitalize";
    // *join btn
    // *if check if on homepage or not
    // * add join button if on homepage ,remove it if on admin page
    if (document.location.pathname === "/index.html") {
        let joinbtn=document.createElement('div');
        var a = document.createElement('a');
          var linkText = document.createTextNode("join");
          a.appendChild(linkText);
          a.title = "join";
          a.href = "/upload.html";
        //   * a style
        a.style.textDecoration='none';
        a.style.color='#FFAD05';
        a.style.textTransform='capitalize';
        a.style.fontWeight='300';
        a.style.fontSize='15px';
          joinbtn.appendChild(a);
        //   *join button style
        joinbtn.style.display='flex';
        joinbtn.style.alignItems='center';
        joinbtn.style.justifyContent='center';
        joinbtn.style.textAlign='center';
        joinbtn.style.backgroundColor='#0D1B2A';
        joinbtn.style.width='66px';
        joinbtn.style.height='40px';
        joinbtn.style.borderRadius='22px';
        li.appendChild(joinbtn);
    }else{
        // *optional 
        // *add delete event button
    }
    // * attributes from firestore
    let startDate=document.createElement('div');
    let endDate=document.createElement('div');
    let description=document.createElement('div');
    description.style.textTransform='capitalize';
    let branch=document.createElement('div');
    // *set content to the content from firestore
    title.textContent=doc.data().title;
    startDate.textContent='Starts date '+doc.data().beginDate;
    endDate.textContent='End date '+doc.data().endDate;
    description.textContent='Details: '+doc.data().description;
    branch.textContent='Branch: '+doc.data().branch 
    li.appendChild(title);
    li.appendChild(branch);
    li.appendChild(startDate);
    li.appendChild(endDate);
    li.appendChild(description);
    eventsList?.appendChild(li);
}
// * funtion for renderign winners from firestore to the page
const winnersList=document.querySelector('.results');
function winnersListFromFirestore(doc: QueryDocumentSnapshot<DocumentData>){
let li=document.createElement('li');
li.setAttribute('winnerId',doc.id);
li.style.paddingBottom='15px';
li.style.paddingLeft='10px';
li.style.margin='16px';
li.style.backgroundColor='white';
li.style.borderWidth='1px';
let firstTitle=document.createElement('h1');
firstTitle.textContent='first place winner';
firstTitle.style.fontSize='28px';
firstTitle.style.textTransform='capitalize';
firstTitle.style.fontWeight='400';
firstTitle.style.color='#FFAD05';
let secondTitle=document.createElement('h1');
secondTitle.textContent='second place winner';
secondTitle.style.fontSize='28px';
secondTitle.style.textTransform='capitalize';
secondTitle.style.fontWeight='400';
secondTitle.style.color='#FFAD05';
let thirdTitle=document.createElement('h1');
thirdTitle.textContent='third place winner';
thirdTitle.style.fontSize='28px';
thirdTitle.style.textTransform='capitalize';
thirdTitle.style.fontWeight='400';
thirdTitle.style.color='#FFAD05';
// *styles
let firstWinner=document.createElement('div');
let secondWinner=document.createElement('div');
let thirdWinner=document.createElement('div');
let branch=document.createElement('div');
let event=document.createElement('div');
let score1=document.createElement('div');
let score2=document.createElement('div');
let score3=document.createElement('div');
// *fetching data
firstWinner.textContent='User:'+doc.data().firstwinner;
secondWinner.textContent='User:'+doc.data().secondwinner;
thirdWinner.textContent='User:'+doc.data().thirdwinner;
branch.textContent='Branch:'+doc.data().branch;
score1.textContent='Score:'+doc.data().scoreone;
score1.style.color='green';
score2.textContent='Score:'+doc.data().scoreTwo;
score2.style.color='green';
score3.textContent='Score:'+doc.data().scoreThree;
score3.style.color='green';
event.textContent='Event:'+doc.data().event;
event.style.fontSize='28px';
event.style.fontWeight='400';
event.style.textTransform='capitalize';
// *appending elemets
li.appendChild(event);
li.appendChild(branch);
li.appendChild(firstTitle);
li.appendChild(firstWinner);
li.appendChild(score1);
li.appendChild(secondTitle);
li.appendChild(secondWinner);
li.appendChild(score2);
li.appendChild(thirdTitle);
li.appendChild(thirdWinner);
li.appendChild(score3);
winnersList?.appendChild(li);
}
//adding documents
const addEventForm=document.querySelector('.add-event-form') as HTMLFormElement
if(addEventForm!=null){
addEventForm?.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    addDoc(eventsRefrence,{
        title:addEventForm.eventTitle.value,
        branch:addEventForm.branch.value,
        beginDate:addEventForm.startDate.value,
        endDate:addEventForm.endDate.value,
        description:addEventForm.description.value,
    }).then(()=>{
    addEventForm.reset();
}
    )
})}
//signup form
const createUserForm=document.querySelector("#signupForm") as HTMLFormElement
if (createUserForm!=null) {
    createUserForm.addEventListener('submit',(e:Event)=>{
        e.preventDefault();
    let signupemail=createUserForm.querySelector("#emailInput") as HTMLInputElement
    let signuppassword=createUserForm.querySelector("#passwordInput") as HTMLInputElement
createUserWithEmailAndPassword(auth,signupemail.value.trim(),signuppassword.value).then((user)=>{
    console.log("user created")
    console.log("current user's email is"+user.user.email)
}).catch((error)=>{
    console.log("error :"+error);
})
} )


}


const loginForm=document.querySelector("#signinForm") as HTMLFormElement
if (loginForm!=null) {
    loginForm.addEventListener('submit',(e:Event)=>{
        e.preventDefault();
        let loginemail=loginForm.querySelector("#emailsigninInput") as HTMLInputElement
        let loginpassword=loginForm.querySelector("#passwordsigninInput") as HTMLInputElement
        signInWithEmailAndPassword(auth,loginemail.value,loginpassword.value).then((user)=>{
            console.log("login with succes")
            console.log("current user's email is"+user.user.email)
        }).catch((error)=>{
            console.log("an error occured"+error)
        })
        })
}