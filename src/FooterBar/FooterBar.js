const FooterBar = () => {
  return (
    <footer className="border-t border-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="flex-1 relative">
          <input type="text" placeholder="Ask a question about your documents..." className="w-full px-4 py-3 pr-12 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            {/* SVG */}
          </button>
        </div>
        <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity">
          {/* SVG */}
        </button>
      </div>
    </footer>
  );
};

export default FooterBar;
