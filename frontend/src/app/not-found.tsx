import Link from "next/link";
import ThreeBlobs from "../components/three-blobs";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-4 md:p-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-gray-600 rounded-2xl p-8 text-white text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                404 - Page Not Found
              </h1>
              <p className="text-lg opacity-90 mb-4">
                Sorry, the page you are looking for does not exist.
              </p>
              <Link
                href="/"
                className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <ThreeBlobs />
          </div>
        </div>
      </div>
    </div>
  );
}
