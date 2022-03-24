import axios from "axios";
const API_URL = "https://final-backend1.herokuapp.com/users/";
class AuthService {
  login(user) {
    return axios
      .patch(API_URL + "signin", {
        fullname: user.fullname,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    console.log(user);
    console.log(API_URL + "signup");
    return axios.post(API_URL + "signup", {
      fullname: user.fullname,
      email: user.email,
      phone_number: user.phone_number,
      password: user.password,
    });
  }
}
export default new AuthService();
