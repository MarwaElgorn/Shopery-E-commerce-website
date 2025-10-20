import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getCategories = () => axios.get(`${baseUrl}/categories`);
export const getProducts = () => axios.get(`${baseUrl}/products`);

export const handleRegister = async function (values) {
  try {
    //existing user
    const existingUser = await axios.get(
      `${baseUrl}/users?email=${values.email}`,
    );

    if (existingUser.data.length > 0) {
      throw new Error("This email is already registered");
    }

    //new user
    const response = await axios.post(`${baseUrl}/users`, values);
    console.log("User registered:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error in handleRegister:", error.message);
    throw error;
  }
};

export const handleLogin = async function (values) {
  try {
    //new user
    const response = await axios.get(`${baseUrl}/users`, {
      params: { email: values.email },
    });

    const user = response.data[0];
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== values.password) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    console.error("Error in handleLogin:", error.message);
    throw error;
  }
};

// export const validation = function (values) {
//   const errors = {};

//   if (!values.name) {
//     errors.name = "Name is required";
//   }

//   if (!values.email) {
//     errors.email = "Email is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password must be at least 6 characters";
//   }

//   if (!values.confirmPassword) {
//     errors.confirmPassword = "Confirm Password is required";
//   } else if (values.password !== values.confirmPassword) {
//     errors.confirmPassword = "Passwords do not match";
//   }

//   return errors;
// };
