// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO_ID",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Elementos del DOM
const loginButton = document.getElementById('login-google');
const logoutButton = document.getElementById('logout');
const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const userPic = document.getElementById('user-pic');

// Iniciar sesión con Google
loginButton.addEventListener('click', () => {
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            userInfo.style.display = 'block';
            loginButton.style.display = 'none';
            logoutButton.style.display = 'inline-block';
            userName.textContent = `Hola, ${user.displayName}`;
            userPic.src = user.photoURL;
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
        });
});

// Cerrar sesión
logoutButton.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            userInfo.style.display = 'none';
            loginButton.style.display = 'inline-block';
            logoutButton.style.display = 'none';
        })
        .catch(error => {
            console.error('Error al cerrar sesión:', error);
        });
});
