var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();


var storageRef = firebase.storage().ref('fgh.jpg');

document.getElementById("ff").addEventListener("change", (e) => {
    let file = e.target.files[0];
    console.log("pushong")
    storageRef.put(file).then(function (snapshot) {
        console.log(snapshot);
        storageRef.getDownloadURL().then(function (url) {
            console.log(url)
          }).catch(function(error) {
            console.log(error)
          });
    });
})