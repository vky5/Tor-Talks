

"use client";

import { useState } from "react";

interface SignInData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [signInData, setSignInData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission (e.g., send data to the backend)
    console.log(signInData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <h2 className="text-3xl font-bold text-center text-white">Sign In</h2>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signInData.email}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signInData.password}
          onChange={handleInputChange}
          className="w-full p-3 rounded-xl bg-[#1F1F2E] text-white border border-[#333] focus:outline-none"
        />
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white bg-[#FE3EAA] rounded-2xl shadow-lg hover:bg-[#6C19FF] transition-all duration-300"
        >
          {isSubmitted ? "Submitting..." : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
