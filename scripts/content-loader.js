(() => {
  const DATA_URL = "content/home.json";

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (!element || typeof value !== "string") {
      return;
    }
    element.textContent = value;
  };

  const setMultilineText = (id, value) => {
    const element = document.getElementById(id);
    if (!element || typeof value !== "string") {
      return;
    }

    const parts = value
      .split(/\n{2,}/)
      .map((part) => part.trim())
      .filter(Boolean);

    element.textContent = "";

    parts.forEach((part, index) => {
      element.appendChild(document.createTextNode(part));
      if (index < parts.length - 1) {
        element.appendChild(document.createElement("br"));
        element.appendChild(document.createElement("br"));
      }
    });
  };

  fetch(DATA_URL, { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (!data) {
        return;
      }

      setText("aboutTitle", data.about_title);
      setMultilineText("aboutBody", data.about_body);
      setText("contactTitle", data.contact_title);
      setMultilineText("contactIntro", data.contact_intro);
      setText("contactCompany", data.contact_company);
      setText("contactAddress", data.contact_address);
      setText("contactPhone", data.contact_phone);

      if (typeof data.contact_email === "string") {
        const emailElement = document.getElementById("contactEmail");
        if (emailElement) {
          emailElement.textContent = data.contact_email;
          emailElement.setAttribute("href", `mailto:${data.contact_email}`);
        }
      }
    })
    .catch(() => {});
})();
