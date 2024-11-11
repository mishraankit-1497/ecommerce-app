import { useEffect, useState } from "react";
import Input from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import axios from "axios";
import "./sign-up.scss";
import { useForm, useFormState } from "react-hook-form";

const SignUpInHouse = () => {

  // const [displayName, setDisplayName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = useFormState({
    control,
  });

  // useEffect(() => {
  //   const newErrors = {};
  //   if (!email) {
  //     newErrors.email = "Email is required!";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     newErrors.email = "Email address is invalid!";
  //   } else if (password.length < 6) {
  //     newErrors.password = "Password must be of minimum length 6";
  //   }
  //   // setErrors(newErrors);
  // }, [email, password]);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   if(password != confirmPassword) {
  //     alert("Password do not match!")
  //   }
  //   if (Object.keys(errors.length === 0)) {
  //     try {
  //       const resp = await axios.post("http://localhost:3000/user", {
  //         displayName,
  //         email,
  //         password,
  //       });
  //       alert("Sign Up successfull!");
  //     } catch (err) {
  //       console.log("Sign up failed", err);
  //       alert("Sign up failed. Please try again!!");
  //     }
  //   } else {
  //     alert("Please fix the errors before submitting.");
  //   }
  //   setIsSubmitting(false);
  // };

  const submitToApi = async ({ displayName, email, password }) => {
    try {
      const resp = await axios.post("http://localhost:3000/user", {
        displayName,
        email,
        password,
      });
      alert("User created successfully!");
    } catch (error) {
      alert("Error creating user");
    }
  };

  const onSubmit = (data) => {
    const { displayName, email, password, confirmPassword } = data;
    if (password != confirmPassword) {
      alert("Password does not match!");
      return;
    }
    submitToApi({ displayName, email, password });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Display name"
          type="text"
          required
          {...register("displayName", {
            required: "Display name is required!",
          })}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <Input
          label="Email"
          type="email"
          required
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <Input
          label="Password"
          type="password"
          required
          {...register("password", {
            required: "Password is required!",
          })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <Input
          label="Confirm password"
          type="password"
          required
          {...register("confirmPassword", {
            required: "Confirm password is required!",
          })}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUpInHouse;
