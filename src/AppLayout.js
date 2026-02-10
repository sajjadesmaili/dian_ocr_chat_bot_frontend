import { useRef, useState } from "react";
import FooterBar from "./FooterBar/FooterBar";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import RightPanel from "./RightPanel/RightPanel";
import Sidebar from "./Sidebar/Sidebar";


const AppLayout = () => {
      const [darkMode] = useState(true); // فرض تم تاریک
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'].includes(file.type)
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files.map(f => ({
        id: Math.random(),
        name: f.name,
        size: f.size,
        type: f.type.split('/')[1] || 'unknown'
      }))]);
    }
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).filter(file => 
      ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'].includes(file.type)
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files.map(f => ({
        id: Math.random(),
        name: f.name,
        size: f.size,
        type: f.type.split('/')[1] || 'unknown'
      }))]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  return (
    <div className={`min-h-screen flex flex-col bg-gray-900 text-white ${darkMode ? 'dark' : ''}`}>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
        <RightPanel />
      </div>
      <FooterBar />
    </div>
  );
};

export default AppLayout;
