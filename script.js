if (!localStorage.getItem("isloged")) {
  localStorage.setItem("isloged", "false");
  window.location.reload();
}

/* Particles Js */
if (
  window.location.href == "https://peraza.peraza.live/index.html" ||
  window.location.href == "https://peraza.peraza.live/cadastro.html"
) {
  particlesJS("fundo", {
    particles: {
      number: {
        value: 20,
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
        value: 0.9,
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
      detect_on: "body, canva, div",
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
    localStorage.setItem("isloged", "true");
    localStorage.setItem("token", response.credential);
    const data = jwt_decode(response.credential);
    console.log(data);
    window.location.href = "home.html";
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id:
        "37042601076-p254vap3ekjeqgvtqh22djcpjtc0ag22.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  };
  /* End Google Login */
}
if (document.getElementById("perfil")){
  document.getElementById("perfil").innerHTML = `
  <img
      src="${jwt_decode(localStorage.getItem("token")).picture}"
      alt="profile"
      class="profile"
  />
  </div>
  `;
  }
  



