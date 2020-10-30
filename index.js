// Add your code here
function submitData(name, email) {

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json()
            })
            .then(json => {
                document.querySelector("body").innerHTML+= Object.entries(json)
            })
<<<<<<< HEAD

            .catch(function(error){
                document.querySelector("body").innerHTML+=`<p>${error.message}</p>`

            });
    }

    submitData("abc","bbscs")  
    
=======
            
            );
    }
    
    submitData("abc","bbscs") 
>>>>>>> 20d5782408270872f4250c7a9f755f035a00e761
