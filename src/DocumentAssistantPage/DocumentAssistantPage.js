import { ClockFading, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// ====== Header Component ======
function Header({ onToggleRightPanel, isRightPanelOpen, setState }) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <button
        onClick={() => setState(false)}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        New Chat
      </button>

      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleRightPanel}
          className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
        >
          {isRightPanelOpen ? "Hide Panel" : "Show Panel"}
        </button>

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

        <button
          aria-label="Toggle theme"
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
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

// ====== Sidebar Component ======
function Sidebar({ state, setState }) {
  const data = JSON.parse(localStorage.getItem("token"));
  // console.log(data);
  return (
    <aside className="w-72  bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-semibold text-gray-300">Chat History</h2>
      </div>
      <div className="flex-1  p-4 space-y-4">
        <ChatHistorySection title="Yesterday" items={["Contract Review"]} />
        <ChatHistorySection
          title="Last 7 Days"
          items={["Research Paper Analysis"]}
        />
      </div>
      <UserProfile user={data.user} />
    </aside>
  );
}

function ChatHistorySection({ title, items }) {
  return (
    <div>
      <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div className="p-4 border-t border-gray-800">
      <div className="flex items-center  gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
          D
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{user.full_name}</p>
          <p className="text-xs text-gray-500 truncate">{user.email}</p>
        </div>
        <button className="text-gray-400 hover:text-white">
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
              d="M13.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ====== MainContent Component ======

// فرض می‌کنم این کامپوننت وجود دارد

function MainContent({ onFilesSelected, state, setState, fileId }) {
  const fileInputRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]); // [{text: "...", sender: "user" | "ai"}]
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // برای کنترل لودینگ

  const token = JSON.parse(localStorage.getItem("token"));

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e) => {
    onFilesSelected(e.target.files);
    e.target.value = null;
  };

  // تابع برای شبیه‌سازی افکت تایپ‌شدن
  const simulateTypingEffect = (fullText) => {
    setIsTyping(true);
    setMessages((prev) => [...prev, { text: "", sender: "ai" }]);

    let i = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = fullText.slice(0, i + 1);
        return newMessages;
      });

      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30); // سرعت تایپ (قابل تنظیم)
  };

  const Chat = async () => {
    if (!question.trim()) return;

    // اگر هنوز در حالت آپلود هستیم، به حالت چت تغییر بده
    if (!state) {
      setState(true);
    }

    // اضافه کردن پیام کاربر
    const userMessage = { text: question, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion(""); // پاک کردن input

    // اگر fileId وجود ندارد، پیام خطا نمایش بده
    if (!fileId) {
      simulateTypingEffect("لطفاً ابتدا یک فایل آپلود کنید.");
      return;
    }

    // فعال کردن لودینگ
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://192.168.20.132:8000/api/documents/${fileId}/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.access_token}`,
          },
          body: JSON.stringify({ query: question }),
        },
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت پاسخ");
      }

      const data = await response.json();
      const aiResponse = data.response || "متاسفانه نتوانستم پاسخ بدهم.";

      // غیرفعال کردن لودینگ قبل از شروع تایپ‌افکت
      setIsLoading(false);

      // اعمال افکت تایپ‌شدن
      simulateTypingEffect(aiResponse);
    } catch (error) {
      console.error("Chat error:", error);
      setIsLoading(false);
      simulateTypingEffect("خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.");
    }
  };

  // وقتی fileId تغییر کرد (یعنی فایل آپلود شد)، وضعیت را به true تغییر بده
  useEffect(() => {
    if (fileId) {
      setState(true);
    }
  }, [fileId, setState]);

  return (
    <div className="w-full flex flex-col flex-1 h-[90vh]">
      {/* ناحیه نمایش چت یا صفحه آپلود */}
      <main className="flex-1  p-4">
        {!state ? (
          // صفحه آپلود
          <div className="h-full flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold mb-2">
                Upload documents to start
              </h2>
              <p className="text-gray-400 mb-6">
                Upload PDF, DOCX, or TXT files to analyze and ask questions
                about their content.
              </p>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  Upload Files
                </button>
              </div>
            </div>
          </div>
        ) : (
          // ناحیه چت
          <div className="flex flex-col h-full">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-10">
                سوال خود را بپرسید...
              </div>
            )}

            <div className="space-y-4 px-10 rtl">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-start" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[100%] text-justify px-4 py-3  rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : " rtl text-gray-200 rounded-bl-none"
                    }`}
                    // style={msg.sender === "ai" ? { direction: "rtl" } : {}}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className=" text-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* {isTyping && !isLoading && (
                <div className="flex justify-end">
                  <div className="bg-gray-800 text-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.docx,.txt"
          onChange={handleChange}
          className="hidden"
        />
      </main>

      {/* نوار پایین برای ورودی سوال */}
      <footer className="border-t rtl border-gray-800 p-4 ">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && Chat()}
              type="text"
              placeholder="Ask a question about your documents..."
              className="w-full px-4 py-3 pr-5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={Chat}
            disabled={!question.trim() || isLoading}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-opacity ${
              question.trim() && !isLoading
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}

// ====== DragAndDrop Component ======
function DragAndDrop({
  uploadedFiles,
  setUploadedFiles,
  state,
  setSatet,
  fileId,
  setFileId,loading, setLoading
}) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  // فقط وقتی فایل جدید داریم دکمه فعال باشه
  const hasNewFile = uploadedFiles.some((f) => f.file);

  /* ---------- Helpers ---------- */
  const formatFileSize = (bytes) => {
    if (!bytes) return "-";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  /* ---------- Add Files ---------- */
  const addFiles = (files) => {
    if (!files || !files.length) return;

    const allowedTypes = ["application/pdf", "text/plain"];
    const filtered = Array.from(files).filter((f) =>
      allowedTypes.includes(f.type),
    );
    // const filtered2 = Array.from(files).filter(f => allowedTypes.includes(f.type));

    if (!filtered.length) return;

    // فایل اول را جداگانه نگه می‌دارد
    //   setFile(filtered[0]);
    // console.log(filtered[0])
    // همه فایل‌ها را در لیست نگه می‌دارد
    setUploadedFiles((prev) => [
      ...prev,
      ...filtered.map((f) => ({
        file: f,
        original_filename: f.name,
        // size: f.size,
      })),
    ]);
  };

  /* ---------- Upload Files ---------- */
  const uploadFiles = async () => {
    if (!hasNewFile) return alert("یک فایل انتخاب کنید");
    const file = uploadedFiles.find((t) => t.file);
    const formData = new FormData();
    formData.append("file", file.file);

    const auth = JSON.parse(localStorage.getItem("token"));
setLoading(true)
    try {
      const res = await fetch(
        "http://192.168.20.132:8000/api/documents/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth.access_token}`,
          },
          body: formData,
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`آپلود موفق نبود: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log("آپلود موفق:", data);
      alert("فایل با موفقیت آپلود شد");

      // بعد از آپلود موفق، فایل‌ها را از لیست حذف کن یا دوباره بگیر
      // یا فقط فایل فعلی را پاک کن
      setUploadedFiles((prev) => prev.filter((f) => f.file !== file));
      setFile(null);
    } catch (error) {
      console.error("خطا در آپلود:", error);
      alert("خطا در آپلود فایل");
      
    }finally{
      setLoading(false)
    }
  };

  /* ---------- Delete File ---------- */
  const handleDelete = async (index, id) => {
    const auth = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await fetch(
        `http://192.168.20.132:8000/api/documents/${id}/deactivate`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${auth.access_token}`,
          },
        },
      );
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("خطا در حذف فایل");
    }

    setUploadedFiles((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    // اگر فایلی که حذف شده، همان فایل انتخاب‌شده برای آپلود بود:
    if (uploadedFiles[index]?.file === file) {
      setFile(null);
    }

    // اگر فایلی که حذف شده، همان فایل انتخاب‌شده برای نمایش بود:
    if (uploadedFiles[index]?.id === fileId) {
      setFileId(null);
    }
  };

  /* ---------- Drag & Drop Handlers ---------- */
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };
  const handleBrowse = () => fileInputRef.current?.click();
  const handleFileChange = (e) => addFiles(e.target.files);

  /* ---------- Get Documents from API ---------- */
  const Getdocuments = async (id, token) => {
    try {
      const response = await fetch(
        `http://192.168.20.132:8000/api/users/${id}/documents`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = await response.json();
      setUploadedFiles(data.documents || []);
    } catch (err) {
      console.error("Fetch documents error:", err);
    }
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    if (auth) {
      Getdocuments(auth.user.id, auth.access_token);
    }
  }, [file]); // ⚠️ این dependency ممکن است مشکل ایجاد کند — توضیح پایین

  /* ---------- Render ---------- */
  return (
    <div className="flex-1 h-full  overflow-y-auto p-4">
      {/* Drop zone */}
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center mb-6 transition-colors ${
          isDragging
            ? "border-purple-500 bg-purple-900/20"
            : "border-gray-700 bg-gray-800/30"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-gray-300 mb-2">Drag & drop files here</p>
        <p className="text-gray-500 text-sm mb-3">or</p>
        <button
          onClick={handleBrowse}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm"
        >
          Browse
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Files list */}
      {uploadedFiles.length === 0 ? (
        <p className="text-center text-gray-500">No files uploaded yet</p>
      ) : (
        <ul className="space-y-3 ">
          {uploadedFiles.map(
            (fileItem, index) =>
              (fileItem.status === "completed" || !fileItem.status) && (
                <li
                  key={fileItem.id ?? `new-${index}`}
                  onClick={() => {
                    setSatet(!state);
                    setFileId(fileItem.id);
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                    state && fileId === fileItem.id
                      ? "border-2 border-purple-500"
                      : "bg-gray-800/50"
                  }`}
                >
                  <div>
                    <p className="text-sm">{fileItem.original_filename}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(fileItem.size)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // جلوگیری از trigger شدن onClick والد (انتخاب فایل)
                      handleDelete(index, fileItem.id);
                    }}
                    className="text-red-500 hover:text-red-300 text-sm font-medium"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </li>
              ),
          )}
        </ul>
      )}

      {/* Save button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={uploadFiles}
          disabled={(!hasNewFile || loading)}
          className={`px-5 py-2 rounded-lg text-sm transition ${
            hasNewFile || loading
              ? "bg-gradient-to-r from-blue-500 to-purple-600"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          ذخیره
        </button>
      </div>
    </div>
  );
}

// ====== BottomBar Component ======
// function BottomBar({fun,setState}) {
//   return (
//     <footer className="border-t border-gray-800 p-4 z-10 ">
//       <div className="max-w-4xl mx-auto flex items-center gap-3">
//         <div className="flex-1 relative">
//           <input
//           onChange={(e)=>setState(e.target.value)}
//             type="text"
//             placeholder="Ask a question about your documents..."
//             className="w-full px-4 py-3 pr-12 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           {/* <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 10V3L4 14h7v7l9-11h-7z"
//               />
//             </svg>
//           </button> */}
//         </div>
//         <button onClick={fun} className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="white"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//             />
//           </svg>
//         </button>
//       </div>
//     </footer>
//   );
// }

// ====== Main Page Component ======
export default function DocumentAssistantPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const fileInputRef = useRef(null);
  const [fileId, setFileId] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [file, setFile] = useState(null);

  // const handleUploadClick = () => fileInputRef.current?.click();
  const toggleRightPanel = () => setIsRightPanelOpen((prev) => !prev);
  const handleFilesSelected = (files) => {
    const filtered = Array.from(files).filter((f) =>
      [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ].includes(f.type),
    );
    if (filtered.length > 0) {
      setUploadedFiles((prev) => [
        ...prev,
        ...filtered.map((f) => ({
          original_filename: f.name,
          // size: f.size,
          // type: f.type.split("/")[1] || "unknown",
        })),
      ]);
    }
  };
  const [selected, setSelected] = useState(false);
  console.log("fileId", uploadedFiles);
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header
        onToggleRightPanel={toggleRightPanel}
        isRightPanelOpen={isRightPanelOpen}
        setState={setSelected}
      />

      <div className="flex flex-1 ">
        <Sidebar />
        {/* <MainContent onUploadClick={handleUploadClick} /> */}
        <MainContent
          onFilesSelected={handleFilesSelected}
          state={selected}
          setState={setSelected}
          fileId={fileId}
        />

        {/* Right Panel با transition */}
        <aside
          className={`bg-gray-900 border-l border-gray-800 flex flex-col transition-all duration-300 ease-in-out  ${
            isRightPanelOpen ? "w-80 p-4" : "w-0 p-0"
          }`}
        >
          {isRightPanelOpen && (
            <DragAndDrop
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
              state={selected}
              setSatet={setSelected}
              fileId={fileId}
              setFileId={setFileId}
              loading={loading}
              setLoading={setLoading}
            />
          )}
        </aside>
      </div>

      {/* <BottomBar /> */}
    </div>
  );
}
