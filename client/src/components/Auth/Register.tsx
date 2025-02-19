import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // handle register button
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("User registration successfull.");
        navigate("/");
      } else {
        message.error("User registration failed.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // web developer's oath, alway keep open console to see if there is an error
  // console.log(formData);

  return (
    <div className="account-column">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input type="text" name="username" onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input type="email" name="email" onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
