
import React, { useRef, useState } from 'react';
import { SpinnerIcon, UploadIcon } from './Icons';

interface ReceiptScannerProps {
  onScan: (file: File) => void;
  isLoading: boolean;
}

export const ReceiptScanner: React.FC<ReceiptScannerProps> = ({ onScan, isLoading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onScan(file);
    }
    // Reset file input value to allow re-uploading the same file
    if (event.target) {
        event.target.value = '';
    }
  };

  const handleClick = () => {
    if (!isLoading) {
        fileInputRef.current?.click();
    }
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoading) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (isLoading) return;
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onScan(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        disabled={isLoading}
      />
      <div
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg transition-colors duration-300 ${isLoading ? 'border-gray-600 bg-gray-700/50 cursor-not-allowed' : `cursor-pointer ${isDragging ? 'border-emerald-400 bg-emerald-900/20' : 'border-gray-500 hover:border-emerald-500 hover:bg-gray-700/50'}`}`}
      >
        {isLoading ? (
          <>
            <SpinnerIcon className="w-12 h-12 mb-4 text-emerald-400" />
            <p className="text-lg font-semibold text-gray-300">Analyzing Receipt...</p>
            <p className="text-sm text-gray-400">This might take a moment.</p>
          </>
        ) : (
          <>
            <UploadIcon className="w-12 h-12 mb-4 text-gray-400" />
            <p className="text-lg font-semibold text-gray-300">
              <span className="text-emerald-400">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-gray-400">PNG, JPG, or WEBP</p>
          </>
        )}
      </div>
    </div>
  );
};
