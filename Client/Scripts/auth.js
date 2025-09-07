// // Google OAuth Integration
// function initGoogleAuth() {
//     const googleLoginBtn = document.getElementById('google-login');
    
//     if (googleLoginBtn) {
//         googleLoginBtn.addEventListener('click', handleGoogleLogin);
//     }
// }

// function handleGoogleLogin() {
//     // Load the Google API client library
//     const script = document.createElement('script');
//     script.src = 'https://accounts.google.com/gsi/client';
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
    
//     script.onload = function() {
//         // Initialize Google Auth
//         google.accounts.id.initialize({
//             client_id: '727558743534-eu4rvga0pjdrtnn9d8j9q90mj7ms53t4.apps.googleusercontent.com', // Replace with your actual client ID
//             callback: handleGoogleResponse
//         });
        
//         // Prompt the user to select a Google account
//         google.accounts.id.prompt();
//     };
// }

// function handleGoogleResponse(response) {
//     // Verify the credential with your backend
//     verifyGoogleToken(response.credential)
//         .then(userData => {
//             // Store user data in localStorage
//             localStorage.setItem('isLoggedIn', 'true');
//             localStorage.setItem('userEmail', userData.email);
//             localStorage.setItem('userName', userData.name);
//             localStorage.setItem('userPicture', userData.picture);
            
//             // Redirect to products page
//             window.location.href = 'http://127.0.0.1:5500/index.html';
//         })
//         .catch(error => {
//             console.error('Google login error:', error);
//             showError('Google login failed. Please try again.');
//         });
// }

// // This function would typically call your backend to verify the token
// // For demo purposes, we'll parse the JWT directly (not secure for production)
// async function verifyGoogleToken(credential) {
//     try {
//         const response = await fetch('/api/auth/google', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ token: credential })
//         });
        
//         const data = await response.json();
        
//         if (!response.ok) {
//             throw new Error(data.message || 'Google login failed');
//         }
        
//         return data.user;
//     } catch (error) {
//         console.error('Google auth error:', error);
//         throw error;
//     }
// }
// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     initGoogleAuth();
//     // ... your existing code ...
// });

// // Add this to your auth.js updateNav function
// function updateNav() {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     const loginLinks = document.querySelectorAll('#login-link');
//     const logoutLinks = document.querySelectorAll('#logout-link');
//     const userProfile = document.querySelectorAll('.user-profile');
    
//     if (isLoggedIn) {
//         loginLinks.forEach(link => link.style.display = 'none');
//         logoutLinks.forEach(link => link.style.display = 'block');
        
//         // Display user info if available
//         const userPicture = localStorage.getItem('userPicture');
//         const userName = localStorage.getItem('userName');
        
//         userProfile.forEach(profile => {
//             if (userPicture) {
//                 profile.innerHTML = `
//                     <img src="${userPicture}" alt="Profile" class="profile-pic">
//                     <span>${userName || 'User'}</span>
//                 `;
//             }
//         });
//     } else {
//         loginLinks.forEach(link => link.style.display = 'block');
//         logoutLinks.forEach(link => link.style.display = 'none');
//         userProfile.forEach(profile => profile.innerHTML = '');
//     }
// }