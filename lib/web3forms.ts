const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitForm(form: HTMLFormElement) {
  const data = new FormData(form);

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.message || "No pudimos enviar el formulario.");
  }
  return json;
}
