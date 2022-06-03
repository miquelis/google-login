function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)

  infos.hidden = 0
  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified
  organization.textContent = data.hd ? data.hd : "none"
  picture.setAttribute("src", data.picture)

  console.log(data)
}

window.onload = function () {
  const clientID = window.prompt("Cole a sua Cliente ID", "")
  google.accounts.id.initialize({
    client_id: clientID,
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.querySelector(".g_id_signin"), {
    theme: "filled_blue",
    size: "large",
    type: "standard",
    shape: "rectangular",
    locale: "pt-BR",
    logo_alignment: "left",
    width: "100",
    // text: "continue_with"
  } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}