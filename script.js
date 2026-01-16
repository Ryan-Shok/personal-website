document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `From: ${name} (${email})\n\n${message}`
  );

  window.location.href = `mailto:ryans2558@gmail.com?subject=${subject}&body=${body}`;
});