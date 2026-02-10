const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Chat History */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-semibold text-gray-300">Chat History</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Example: Yesterday */}
        <div>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Yesterday</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm">
              {/* SVG */}
              Contract Review
            </button>
          </div>
        </div>
        {/* Last 7 Days */}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">D</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">dsdsds</p>
          <p className="text-xs text-gray-500 truncate">dsdsds@gfdg.nmm</p>
        </div>
        <button className="text-gray-400 hover:text-white">
          {/* SVG */}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
