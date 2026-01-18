document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("msg").value.trim();

  if (!name || !msg) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, msg })
    });

    const data = await res.json();

    if (data.success) {
      alert("Message send successfully!");
      document.querySelector("form").reset();
    } else {
      alert("Error sending message");
    }
  } catch (err) {
    console.error(err);
    alert("Server not running!");
  }
});
