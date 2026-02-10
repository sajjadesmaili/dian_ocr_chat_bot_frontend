const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
        {/* SVG plus */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        New Chat
      </button>

      <div className="flex items-center space-x-3">
        {/* Translate button */}
        <button aria-label="Translate" className="w-10 h-10 rounded-lg bg-gray-800/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors">
          {/* SVG */}
        </button>
        {/* Theme toggle */}
        <button aria-label="Toggle theme" className="w-10 h-10 rounded-lg bg-gray-800/70 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors">
          {/* SVG */}
        </button>
      </div>
    </header>
  );
};

export default Header;
