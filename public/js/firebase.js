let firebaseConfig = {
    //my firebase credentials
    
    apiKey: "AIzaSyD9hHKDXcapK9Ig3lfK2_O7q7RAXNE6cSQ",
    authDomain: "blog-4131f.firebaseapp.com",
    projectId: "blog-4131f",
    storageBucket: "blog-4131f.appspot.com",
    messagingSenderId: "543497150310",
    appId: "1:543497150310:web:9d1daaf77f6269d1ccf2a7",
    measurementId: "G-DLQZD75TP9"
 };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth=firebase.auth();
const logoutUser=()=>{
    auth.signOut();
    location.reload();
}