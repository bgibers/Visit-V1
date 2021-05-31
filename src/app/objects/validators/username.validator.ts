import { FormControl } from "@angular/forms";

export class UsernameValidator {
  static validUsername(fc: FormControl) {
    // This is the backend check to see if the username equals an existing one
    if (
      fc.value.toLowerCase() === "abc123" ||
      fc.value.toLowerCase() === "123abc"
    ) {
      return {
        validUsername: true,
      };
    } else {
      return null;
    }
  }
}
