function checkValidForm() {
    const form = document.getElementById("form-contato");
  
    if (!form.reportValidity()) {
        document.getElementById("error").style.cssText = 'display:block;'
    }
  }