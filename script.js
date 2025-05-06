const SERVICE_ID = "service_izikrkg";
const TEMPLATE_ID = "template_9spsxvi";
const PUBLIC_KEY = "wCFHI6wYiQQY9IQVM";

function toggleSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = section.style.display === 'block' ? 'none' : 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

document.getElementById('kontaktForm').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      alert("Wysłane. Dzięki za zaufanie.");
      this.reset();
    }, (error) => {
      alert("Błąd wysyłki: " + error.text);
    });
});

(function () {
  emailjs.init(PUBLIC_KEY);
})();
