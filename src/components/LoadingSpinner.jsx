// Loading component for better user experience
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-black">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-purple-400 text-xl animate-pulse font-mono">Loading Portfolio...</div>
      <div className="text-gray-400 text-sm mt-2">Please wait while we load the experience</div>
    </div>
  </div>
);

export default LoadingSpinner;