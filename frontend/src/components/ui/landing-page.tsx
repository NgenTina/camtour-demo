import { Button } from "@/components/button";
import Link from "next/link";
import ThreeBlobs from "../three-blobs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-4 md:p-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-gray-600 rounded-2xl p-8 text-white text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                WELCOME TO
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                CAMTOUR <span className="text-orange-300">CHATBOT!</span>
              </h2>
              <p className="text-lg opacity-90">
                Your virtual travel assistant.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
                READY TO DISCOVER TEMPLE, FOOD AND HIDDEN GEMS?
              </h3>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <Link
                href="/auth/register"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold flex items-center justify-center transition-colors"
              >
                REGISTER
              </Link>

              <p className="text-center text-gray-600 text-sm">
                or continue with
              </p>

              <div className="space-y-3">
                <Link
                  href="/auth/register"
                  className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Link>

                <Link
                  href="/auth/login"
                  className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Link>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                or Already have account?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Login here.
                </Link>
              </p>
              <p className="text-center text-sm text-gray-600 mt-4">
                or{" "}
                <Link
                  href="/chat"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Chat without logging in.
                </Link>
              </p>
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
