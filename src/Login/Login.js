import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true); // فرض بر اینکه تم تاریک فعال است
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login:", { email, password });
    // navigate("/chatbot")
    // در اینجا منطق لاگین را پیاده‌سازی کنید

    const response = await fetch(`http://192.168.20.132:8000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", JSON.stringify(data));
    navigate("/chatbot");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black"
          : "bg-gradient-to-br from-gray-100 to-gray-200"
      }`}
    >
      {/* دکمه‌های بالا راست */}
      <div className="absolute top-6 right-6 flex space-x-3">
        {/* دکمه ترجمه */}
        <button
          aria-label="Translate"
          className="w-10 h-10 rounded-lg bg-gray-800/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.5 14A5.5 5.5 0 1016 9.5a5.5 5.5 0 00-5.5 5.5zm6.878-3.637a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 00.707-.707L12.5 13.5l2.5-2.5z"
            />
          </svg>
        </button>

        {/* دکمه تم */}
        <button
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-lg bg-gray-800/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* کارت ورود */}
      <div className="w-full max-w-md">
        <div
          className={`rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-800/50 transition-all duration-300 ${
            darkMode ? "bg-gray-900/80" : "bg-white/80"
          }`}
        >
          {/* لوگو + عنوان */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.64.304-1.254.857-1.657l5.143-3.67Z"
                />
              </svg>
            </div>
            <h1
              className={`text-2xl font-bold ${!darkMode ? "text-black" : "text-white"}`}
            >
              AI Document Assistant
            </h1>
            <p
              className={`${darkMode ? "text-gray-400" : "text-black"} text-sm mt-2 text-center`}
            >
              Upload files, extract text, and ask intelligent questions
            </p>
          </div>

          {/* فرم ورود */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className={`block ${!darkMode ? "text-black" : "text-gray-300"} text-sm font-medium mb-2`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg ${!darkMode ? "" : ""} bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block ${!darkMode ? "text-black" : "text-gray-300"} text-sm font-medium mb-2`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium text-white flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h6z"
                />
              </svg>
              Sign In
            </button>
          </form>

          {/* لینک ثبت‌نام */}
          <p className="text-center mt-6 text-gray-400 text-sm">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
