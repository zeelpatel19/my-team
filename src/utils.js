export function capitaliseFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export class FormValidator {
  static isNotEmpty(input) {
    return input.trim().length !== 0;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
