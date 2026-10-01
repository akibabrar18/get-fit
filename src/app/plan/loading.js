const GlobalLoading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
      </div>

      <h1 className="mt-5 text-xl font-semibold text-gray-700">
        Loading workouts…git 
      </h1>

      <p className="mt-1 text-sm text-gray-400">
        Please wait a moment
      </p>
    </div>
  );
};

export default GlobalLoading;