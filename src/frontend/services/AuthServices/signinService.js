import axios from "axios";

const signinService = async ({ email, password }) => {
  try {
    const {
      data: {
        foundUser: { firstName },
        encodedToken,
      },
    } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    return [firstName, encodedToken];
  } catch (e) {
    console.log(e);
  }
};
export { signinService };
