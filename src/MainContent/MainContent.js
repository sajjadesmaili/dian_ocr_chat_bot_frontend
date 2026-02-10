const MainContent = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mx-auto mb-6">
            {/* SVG */}
          </div>
          <h2 className="text-xl font-bold mb-2">Upload documents to start</h2>
          <p className="text-gray-400 mb-6">
            Upload PDF, DOCX, or TXT files to analyze and ask questions about their content.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            {/* SVG */}
            Upload Files
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
