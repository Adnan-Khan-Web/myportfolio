 AOS.init({ duration: 1000, once: true });

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      const icon = document.getElementById("theme-icon");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    }

    const typingText = document.getElementById("typing-text");
    const texts = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Freelancer"];
    let i = 0, j = 0, current = '', isDeleting = false;

    function type() {
      if (i < texts.length) {
        if (!isDeleting && j <= texts[i].length) {
          current = texts[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
          current = texts[i].substring(0, j--);
        }
        typingText.textContent = current;
        if (!isDeleting && j === texts[i].length) {
          isDeleting = true;
          setTimeout(type, 1500);
        } else if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % texts.length;
          setTimeout(type, 200);
        } else {
          setTimeout(type, isDeleting ? 50 : 100);
        }
      }
    }

    type();