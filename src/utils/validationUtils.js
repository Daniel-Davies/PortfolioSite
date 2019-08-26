export function isInvalidName(value) {
  return value < 1 || value > 40;
}

export function isInvalidOrganisation(value) {
  return value < 1 || value > 40;
}

export function isInvalidEmail(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexTester = new RegExp(re);
  const validated = regexTester.test(value);
  return !validated;
}

export function isInvalidMessage(value) {
  return value < 1 || value > 100;
}

export function isInvalidCaptcha(value) {
  return value === '';
}

export function validateForm(state) {
  const {
    errorEmail, errorMessage, errorName, errorOrganisation,
  } = state;

  if (errorEmail || errorMessage || errorName || errorOrganisation) {
    return false;
  }
  if (isInvalidCaptcha(state.captchaToken) || isInvalidEmail(state.email) || isInvalidMessage(state.message) || isInvalidOrganisation(state.organisation) || isInvalidName(state.name)) {
    return false;
  }
  return true;
}
