window.addEventListener("DOMContentLoaded", function (event) {
    console.log('Site totalmente carregado!');
    if(localStorage.getItem("isloged")){
        let isloged = localStorage.getItem("isloged")
        if (isloged == "true"){
            window.location.href = 'home.html'
        }
        else if (isloged == "false"){


            document.getElementById('olho').addEventListener('mousedown', function() {
                document.getElementById('pass').type = 'text';
              });
              
              document.getElementById('olho').addEventListener('mouseup', function() {
                document.getElementById('pass').type = 'password';
              });
              
              document.getElementById('olho').addEventListener('mousemove', function() {
                document.getElementById('pass').type = 'password';
              });
              /* End Olho */
            
              /* Particles Js */
            particlesJS("fundo", {
            
                particles: {
                    number: {
                        value: 15,
                        density: {
                            enable: true,
                            value_area: 300,
                        },
                    },
              
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "triangle",
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anum: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 4,
                            size_min: 0.3,
                            sync: false,
                        },
                    },
              
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
              
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "bounce",
                        bounce: false,
                    },
                },
                interactivity: {
                    detect_on: "body",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                },
              
                retina_detect: true,
              
              });
                /* End Particles Js */
                /* Google Login */
              function handleCredentialResponse(response) {
                isloged = true
                const data = jwt_decode(response.credential)
                console.log(data)
              }
              window.onload = function () {
                google.accounts.id.initialize({
                  client_id: "37042601076-p254vap3ekjeqgvtqh22djcpjtc0ag22.apps.googleusercontent.com",
                  callback: handleCredentialResponse
                });
                google.accounts.id.renderButton(
                  document.getElementById("buttonDiv"),
                  { theme: "outline", size: "large" }
                );
                google.accounts.id.prompt();
              }
            /* End Google Login */
        }
        
    }
    else{
        localStorage.setItem('isloged', "false")
        window.location.reload()
    }
    
});
