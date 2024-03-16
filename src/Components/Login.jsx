import WorldPNG from "../assets/World.png";
import Circle from "../assets/Circle.png";
import Skeleton from "../assets/Skeleton.png";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  
  //UseState for form data
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "",
  });
  //UseState for storing random password
  const [password, setPassword] = useState(null);

  const { login } = useAuth();

  const handleLogin = () => {
    // Implement your login logic here
    login();
  };

  //Keep track of changing input values
  const changingValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  //Generating random password
  const generatePassword = () => {
    let newPass = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
    let specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 0; i < 3; i++) {
      let generatingNumber = Math.floor(Math.random() * 10);
      newPass += generatingNumber;
    }
    let randomAlphabet;
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * alphabets.length);
      randomAlphabet = alphabets[randomIndex];
      newPass += randomAlphabet;
    }
    let randomSpecialCharacter;
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * specialCharacters.length);
      randomSpecialCharacter = specialCharacters[randomIndex];
      newPass += randomSpecialCharacter;
    }
    setPassword(newPass);
  };
  //Run the random password generation function when a component render
  useEffect(() => {
    generatePassword();
  }, []);
  //Handle Submission after entering credentials
  const handleSubmission = () => {
    // console.log("Matched or not",newPass, "   ", password )
    if (password == formData.password && formData.email == "admin@gmail.com") {
      alert("Congrats");
      login();
      navigate("/home");
    } else {
      if (formData.password != password) {
        alert("Password not matched");
      } else if (formData.email != "admin@gmail.com") {
        alert("Incorrect email");
      }
    }
  };
  return (
    <>
      <h1>{password}</h1>
      <div className="h-screen bg-[#FFE6C9] flex justify-center items-center">
        <div className=" bg-[#fff] h-[80vh] w-[70vw] rounded-lg flex items-center">
          <div className="bg-[#FFE6C9] h-[78vh] w-[40vw] m-2 rounded-l-lg ">
            <div>
              <img
                src={WorldPNG}
                alt="World png"
                className="h-[120px] w-[120px] rounded-t-lg "
              />
            </div>
            <div className="relative">
              <div className="child-1">
                <img
                  src={Circle}
                  alt="background circle"
                  className=" w-[50%] m-auto"
                />
              </div>
              <div className="child-2 absolute top-5 left-[50%]  -translate-x-[50%]  ">
                <img
                  src={Skeleton}
                  alt="Skeleton png"
                  className="w-[75%] m-auto"
                />
              </div>
              <div className="mt-10">
                <div className="heading">
                  <h1 className="text-center text-xl font-bold text-[#73114B]">
                    Turn your ideas into reality.
                  </h1>
                  <p className="text-center text-base text-[#73114B]">
                    Start for free and get attractive offers from the community
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="2nd m-auto ">
            <div className="loginform flex gap-y-4 flex-col">
              <div>
                <h1 className=" text-xl font-bold text-[#73114B]">
                  Login to your Account
                </h1>
                <p className="text-sm text-[#73114B]">
                  See what is going on with your business
                </p>
              </div>
              <div className="form flex gap-y-4 flex-col">
                <div className="email">
                  <div className="label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={changingValue}
                      required
                      className="border-2 border-[#DED2D9] rounded-md p-2 w-full focus:bg-[#73114B] focus:text-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="password">
                  <div className="label">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input">
                    <input
                      type="password"
                      name="password"
                      placeholder="**********"
                      value={formData.password}
                      onChange={changingValue}
                      required
                      className="border-2 border-[#DED2D9] rounded-md p-2 w-full focus:bg-[#73114B] focus:text-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="forget flex justify-between items-center">
                  <div className="checkbox flex items-center">
                    <input type="checkbox" name="Remember" />
                    <label htmlFor="remember" className="text-xs">
                      Remember me
                    </label>
                  </div>
                  <div className="password">
                    <Link to="/" className="text-[#73114B] font-medium text-xs">
                      Forget Password?
                    </Link>
                  </div>
                </div>
                <div className="submitbutton">
                  <button
                    className="border-2 border-[#73114B] rounded-md p-2 w-full text-center bg-[#73114B] text-[#fff]"
                    onClick={handleSubmission}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
