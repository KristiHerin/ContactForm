  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNV-4MN9KIHxmXpXlXMjskdfnXnt-rMZM",
    authDomain: "contact-2b1c9.firebaseapp.com",
    databaseURL: "https://contact-2b1c9.firebaseio.com",
    projectId: "contact-2b1c9",
    storageBucket: "contact-2b1c9.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let messagesRef = firebase.database().ref('messages')

  document.getElementById('contactForm').addEventListener('submit', submitForm)

  // submit form
  function submitForm(e){
      e.preventDefault()
      var name = getInputVal('name')
      var company = getInputVal('company')
      var email = getInputVal('email')
      var phone = getInputVal('phone')
      var message = getInputVal('message')

      // saves message
      saveMessage(name, company, email, phone, message)

      // show alert
      document.querySelector('.alert').style.display = 'block'

      // hide alert
      setTimeout(function(){
          document.querySelector('.alert').style.display = 'none'
      }, 3000)

      // clear form
      document.getElementById('contactForm').reset()
  }

  function getInputVal(id){
      return document.getElementById(id).value
  }

  function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
  }


