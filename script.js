document.getElementById("generateForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const city = document.getElementById("city").value.trim();

  const generatedCode = `<div>
  <h1>Hosteska: ${name}</h1>
  <p>Město: ${city}</p>
</div>`;

  document.getElementById("output").value = generatedCode;
});
