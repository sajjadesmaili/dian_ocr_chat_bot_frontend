const RightPanel = ({ isDragging, handleDragOver, handleDragLeave, handleDrop, handleBrowse, uploadedFiles, fileInputRef, handleFileChange, formatFileSize }) => {
  return (
    <aside className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-semibold">Uploaded Documents</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Drag & Drop Area */}
        <div className={`border-2 border-dashed rounded-xl p-6 text-center mb-6 transition-colors ${isDragging ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-800/30'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
            {/* SVG */}
          </div>
          <p className="text-gray-300 mb-2">Drag & drop files here</p>
          <p className="text-gray-500 text-sm mb-3">or</p>
          <button onClick={handleBrowse} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Browse</button>
          <input ref={fileInputRef} type="file" multiple accept=".pdf,.docx,.txt" onChange={handleFileChange} className="hidden"/>
          <p className="text-gray-500 text-xs mt-3">Supported: PDF, DOCX, TXT</p>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No files uploaded yet</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {uploadedFiles.map((file) => (
              <li key={file.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center">
                    {/* SVG */}
                  </div>
                  <div>
                    <p className="text-sm font-medium truncate max-w-[120px]">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  {/* Delete SVG */}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default RightPanel;
