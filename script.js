fetch("assets/super_highres_ascii_plain.txt")
  .then(res => res.text())
  .then(data => {
    document.getElementById("ascii-art").textContent = data;
  });
