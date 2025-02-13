//============================= GSAP Animations =============================//
// Sembunyikan scroll bar di awal (saat loading page masih aktif)
document.body.classList.add("loading");

// Hapus scroll bar setelah loading page selesai
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.3,
    delay: 0.5,
    onComplete: () => {
      document.body.classList.remove("loading");
      document.documentElement.style.overflow = "auto"; // Tampilkan kembali scrollbar

      // Tampilkan tombol untuk manual play jika diperlukan
      showPlayButton();
    }
  }
);

function showPlayButton() {
    const playButton = document.createElement('button');
    playButton.className = 'music-button show';
    playButton.innerHTML = "<i class='bx bxs-music'></i>"; // Ikon awal adalah play
    document.body.appendChild(playButton);

    const audio = document.getElementById("bgm");

    // Event listener untuk tombol play/pause
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = "<i class='bx bx-pause'></i>"; // Ganti ikon ke pause
        } else {
            audio.pause();
            playButton.innerHTML = "<i class='bx bxs-music'></i>"; // Ganti ikon ke play
        }
    });

    // Event listener untuk sinkronisasi tombol ketika lagu selesai
    audio.addEventListener('ended', () => {
        playButton.innerHTML = "<i class='bx bxs-music'></i>"; // Kembali ke ikon play
    });
}

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.8,
    delay: 1.3,
  },
);

//============================= toggle icon navbar =============================//
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      // Check if the user is in the home section
      if (id === "home") {
        // Update the counter when the user is in the home section
        updateCounter();
      }
    }
  });

  // Check if the user scrolled more than 100 pixels and apply sticky class to the header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when clicking on navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//============================= scroll reveal =============================//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Reveal sections on scroll
ScrollReveal().reveal(".home-content, .heading, .about-content", {
  origin: "top",
});
ScrollReveal().reveal(".home-img, .services-container", { origin: "bottom" });
ScrollReveal().reveal(
  ".home-content h1, .about-img, .headingg, .portfolio-box",
  { origin: "left" },
);
ScrollReveal().reveal(".home-content p", { origin: "right" });

// Adding additional reveal options for footer
ScrollReveal().reveal(".footer", { origin: "bottom", interval: 200 });

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: [" Developer", " graphic design", "Photograpyh"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".type-auto", {
    strings: [" Muffin", "Muffinzz"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  });
});

