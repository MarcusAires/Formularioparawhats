function sendwhatsapp() {
  const phonenumber = "+5584997061197";
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const tipoDeSite = document.querySelector("#tipodesite").value;
  const temSite = document.querySelector('input[name="temsite"]:checked').value;
  const site = document.querySelector("#site").value || "Não informado";
  const orçamento = document.querySelector('input[name="orçamento"]:checked').value;
  const dicas = document.querySelector('input[name="dicas"]:checked').value;

  const url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    encodeURIComponent(
      `*Nome:* ${firstName} ${lastName}\n` +
        `*E-mail:* ${email}\n` +
        `*Telefone:* ${phone}\n` +
        `*Tipo de Site:* ${tipoDeSite}\n` +
        `*Já possui site?:* ${temSite}\n` +
        `*Link do site:* ${site}\n` +
        `*Orçamento sem compromisso?:* ${orçamento}\n` +
        `*Dicas gratuitas?:* ${dicas}\n` +
        `\nOlá! Gostaria de um orçamento.`
    );

  window.open(url, "_blank");
}
