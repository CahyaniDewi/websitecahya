// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWbzmWjgY3aumoQc1GaUXrpgmKuTL3EnA",
    authDomain: "portfoliocahya.firebaseapp.com",
    databaseURL: "https://portfoliocahya-default-rtdb.firebaseio.com",
    projectId: "portfoliocahya",
    storageBucket: "portfoliocahya.appspot.com",
    messagingSenderId: "886378403033",
    appId: "1:886378403033:web:64ef992ba6e5788b821ac8",
    measurementId: "G-93CN4KHH5K"
};
  
  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referensi ke Firebase Realtime Database
  var contactDB = firebase.database().ref('contact');
  
  // Tambahkan event listener ke pengiriman form
  document.getElementById('contactForm').addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Ambil nilai dari input form
    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
  
    console.log(name, email, message);
  
    // Simpan data ke Firebase
    saveMessages(name, email, message);

// Tampilkan notifikasi sukses
  var alertMessage = document.getElementById('alertMessage');
  alertMessage.classList.remove('d-none');
  alertMessage.classList.add('show');

  // Sembunyikan pesan setelah beberapa detik
  setTimeout(() => {
    alertMessage.classList.add('d-none');
    alertMessage.classList.remove('show');
  }, 3000);
  
    // Reset form setelah pengiriman (opsional)
    document.getElementById('contactForm').reset();
  }
  
  // Fungsi untuk mendapatkan nilai input form
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  // Fungsi untuk menyimpan pesan ke Firebase Realtime Database
  function saveMessages(name, email, message) {
    var newContactRef = contactDB.push();
    newContactRef.set({
      name: name,
      email: email,
      message: message
    });
  }
  