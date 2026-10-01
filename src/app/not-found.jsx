import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#bbf426] text-7xl font-black">404</p>

        <h1 className="mt-4 text-3xl font-bold">
          Workout Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-[#bbf426] text-black font-bold hover:bg-[#a6dc1c] transition"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;