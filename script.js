function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.addEventListener("DOMContentLoaded", () => {

  // LOGIN
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === "" || password === "") {
        error.textContent = "All fields are required";
        return;
      }

      if (!validateEmail(email)) {
        error.textContent = "Invalid email format";
        return;
      }

      error.textContent = "Login successful";
    });
  }

  // DESTINATIONS
  const placeSelect = document.getElementById("placeSelect");

  if (placeSelect) {
    async function getDestinations() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );

        const result = await response.json();

        result.data.forEach(item => {
          const option = document.createElement("option");
          option.textContent = item.country;
          placeSelect.appendChild(option);
        });

      } catch (error) {
        console.error(error);
      }
    }

    getDestinations();
  }

});

const searchBtn = document.getElementById("searchBtn");
const placeSelect = document.getElementById("placeSelect");
const dateInput = document.getElementById('date-input');
const personSelect = document.getElementById('person-input');
const result = document.getElementById("result");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const place = placeSelect.value;
  const date = dateInput.value;
  const persons = personSelect.value;

  if (place === "Choose Place" || date === "" || persons === "Person") {
    result.textContent = "Please fill all fields";
    return;
  }

  result.textContent = 
    `trips to ${place} on ${date} for ${persons} are available`;
});

const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("acceptCookies");
const denyBtn = document.getElementById("denyCookies");



acceptBtn.addEventListener("click", () => {
  banner.innerHTML = "<p>Cookies accepted </p>";

  

  setTimeout(() => {
    banner.style.display = "none";
  }, 1000);
});



// Deny cookies (session only)
denyBtn.addEventListener("click", () => {
  banner.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


















