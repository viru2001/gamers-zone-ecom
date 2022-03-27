import axios from "axios";

const signupService = async ({firstName, lastName, email, password}) => {
  try {
    const {
      data: { encodedToken },
    } = await axios.post(`/api/auth/signup`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return [firstName, encodedToken];
  } catch (e) {
    console.log(e);
  }
};
export { signupService };
