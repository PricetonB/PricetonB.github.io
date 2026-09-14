const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('estimate-form');
const formNote = document.getElementById('form-note');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const subject = encodeURIComponent(`Estimate Request - ${service}`);

  const body = encodeURIComponent(
    `Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${message}`
  );

  formNote.textContent =
    'Opening your email app with the estimate details...';

  window.location.href =
    `mailto:alexchanxela1224@gmail.com?subject=${subject}&body=${body}`;
});
