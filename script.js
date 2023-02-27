const divForm = document.getElementById('divForm');
const login = document.getElementById('login');
const register = document.getElementById('register');
const disconnectBtn = document.getElementById('disconnect');


//display login form
login.addEventListener("click", (e)=>{
    e.preventDefault();
    fetch('login.php')
    .then(response=>{
        return response.text();
    }).then(data=>{
        divForm.innerHTML = data
        const loginBtn = document.getElementById('loginBtn');
        const loginForm = document.getElementById('loginForm');
        // console.log(loginBtn)

        loginBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            let formData = new FormData(loginForm)
            fetch('login.php', {
                method: "POST",
                body: formData
            })
            .then(response=>{
                return response.text();
            })
        })
    })
    
})



//display register form
register.addEventListener("click", (e)=>{
    e.preventDefault();
    fetch('register.php')
    .then(response=>{
        return response.text();
    }).then(data=>{
        divForm.innerHTML = data
        // const registerBtn = document.getElementById('registerBtn');
        const registerForm = document.getElementById('registerForm');
        
        // console.log(registerForm)

        registerForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const formData = new FormData(registerForm)
            // console.log(Array.from(formData))
            fetch('register.php', {
                method: "POST",
                body: formData
            })
            .then(response=>{
                // console.log(response)
                return response.text();
            })
        })
    })

   
})

disconnectBtn.addEventListener("click", ()=>{
    window.location.href = 'disconnect.php'
})

