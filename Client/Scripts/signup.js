// Alert Controller
function showAlert(message, isSuccess = true) {
  const alert = document.getElementById('customAlert');
  const messageEl = document.getElementById('alertMessage');
  const closeBtn = document.getElementById('alertClose');

  // Set message and style
  messageEl.textContent = message;
  alert.className = `alert-modal ${isSuccess ? 'success' : 'error'}`;
  alert.style.display = 'flex';

  // Close handler
  closeBtn.onclick = () => {
    alert.style.display = 'none';
    if (isSuccess) window.location.href = "login.html";
  };
}


const signupForm = document.getElementById("signupform");

signupForm.addEventListener("submit", async function(event){
    event.preventDefault(); //prevent from refreshing or reloading the page

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    try{
        if(password !== confirmpassword){
           document.getElementById("password").style.borderColor = "red";
           document.getElementById("confirmpassword").style.borderColor = "red"; border = "2px";
           errorMessage.style.display = "block";
           return;
        }else{
            document.getElementById("password").style.borderColor = "black";
            document.getElementById("confirmpassword").style.borderColor = "black";
            errorMessage.style.display = "none";
        }

        

        const response  = await fetch("http://localhost:5500/signup",{
            method: "POST", //creating a new user, that is a post request
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        });

    //     const data = await response.json();
    //     if(response.ok){
    //         alert('signup is successful! Redirecting to login page');
    //         window.location.href = "login.html";
    //     }else{
    //         alert(data.message || "signup failed")
    //     }
    // }catch(error){
    //     console.log(error);
    //     alert("something went wrong")
    // }
    const data = await response.json();
    
    if (response.ok) {
      showAlert("Signup successful! Click OK to continue.", true);
    } else {
      showAlert(data.message || "Signup failed", false);
    }
  } catch (error) {
    console.error(error);
    showAlert("Network error. Please try again.", false);
  }


})