const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');
    const content = document.getElementById(id);
    const isVisible = content.style.display === 'block';

    contents.forEach(c => c.style.display = 'none');

    content.style.display = isVisible ? 'none' : 'block';
  });
});

// EmailJS init (replace with your keys)
emailjs.init("wCFHI6wYiQQY9IQVM");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_izikrkg", "template_9spsxvi", {
    message: this.message.value
  }).then(() => {
    alert("Wiadomość wysłana. Dziękujemy.");
    this.reset();
  }, (error) => {
    alert("Błąd: " + JSON.stringify(error));
  });
});
