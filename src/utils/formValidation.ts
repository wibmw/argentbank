//* ******************** DISPLAY MESSAGES  ***********************************/
// clear validation message
export const clearValidationMessage = (element: HTMLElement): void => {
  element.closest('.input-wrapper').setAttribute('data-error-visible', 'false')
  element.closest('.input-wrapper').setAttribute('data-error', '')
}

// set validation message
export const setValidationMessage = (element: HTMLElement, message: string): void => {
  element.closest('.input-wrapper').setAttribute('data-error-visible', 'true')
  element.closest('.input-wrapper').setAttribute('data-error', message)
}

//* ******************** CHECK FUNCTIONS  ***********************************/
// check names function
export const namesCheck = (element: HTMLInputElement) => {
  const isNotValid = !/^[a-zA-Z]{2,}$/.test(element.value)
  return isError(element, isNotValid, 'Invalid name !')
}

// check email function
export const emailCheck = (element: HTMLInputElement) => {
  const isNotValid = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(element.value)
  return isError(element, isNotValid, 'Invalid email address ')
}

// check password function
export const passwordCheck = (element: HTMLInputElement) => {
  const isNotValid = false // !/^[a-zA-Z0-9._-+*]{8,}$/.test(element.value)
  return isError(element, isNotValid, 'Invalid password !')
}

// returns check result with error message management
const isError = (element: HTMLInputElement, isNotValid: boolean, message: string) => {
  if (isNotValid || element.value === '') {
    setValidationMessage(element, message)
    return false
  }
  clearValidationMessage(element)
  return true
}
