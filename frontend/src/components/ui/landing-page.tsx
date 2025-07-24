import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Chrome, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
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
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold">
                REGISTER
              </Button>

              <p className="text-center text-gray-600 text-sm">
                or continue with
              </p>

              <div className="space-y-3">
                <Button
                  variant="outline"
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
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                or Already have account?{" "}
                <button className="text-blue-600 hover:underline font-medium">
                  Login here.
                </button>
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="space-y-6 -mt-[6em]">
              <div className="relativew-[20rem] h-56 mt-[4em] ml-[15em]">
                <svg viewBox="-250 -250 500 500">
                  <defs>
                    <clipPath id="blobClip-1">
                      <path d="M115.1 -117.6C140.6 -89.6 146.8 -44.8 142.1 -4.7C137.4 35.4 121.7 70.7 96.2 110.4C70.7 150 35.4 194 -4.9 199C-45.3 203.9 -90.5 169.8 -140.5 130.2C-190.5 90.5 -245.3 45.3 -248.4 -3.2C-251.6 -51.6 -203.2 -103.2 -153.2 -131.2C-103.2 -159.2 -51.6 -163.6 -3.4 -160.2C44.8 -156.8 89.6 -145.6 115.1 -117.6" />
                    </clipPath>
                  </defs>
                  <image
                    href="/images/cambodia-island.png"
                    x="-250"
                    y="-250"
                    width="500"
                    height="500"
                    clipPath="url(#blobClip-1)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>

              <div className="relative w-[28rem] h-72 -mt-[5em] -ml-[1em]">
                <svg viewBox="-250 -250 500 500">
                  <defs>
                    <clipPath id="blobClip-2">
                      <path d="M115.2 -113.7C157.4 -73.1 205.2 -36.5 222.3 17.1C239.4 70.7 225.8 141.4 183.6 181.8C141.4 222.1 70.7 232 1.8 230.3C-67.2 228.5 -134.4 215 -183.5 174.7C-232.7 134.4 -263.8 67.2 -247.9 15.9C-232 -35.4 -169 -70.7 -119.9 -111.4C-70.7 -152 -35.4 -198 0.6 -198.6C36.5 -199.2 73.1 -154.4 115.2 -113.7" />
                    </clipPath>
                  </defs>
                  <image
                    href="/images/ankor-wat-01.jpg"
                    x="-250"
                    y="-250"
                    width="500"
                    height="500"
                    clipPath="url(#blobClip-2)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>

              <div className="relative w-45 h-45 ml-auto">
                <svg viewBox="-250 -250 500 500">
                  <defs>
                    <clipPath id="blobClip-3">
                      <path d="M132.4 -128.5C177.5 -87.2 224.3 -43.6 220.1 -4.1C216 35.4 161 70.7 115.9 102.5C70.7 134.4 35.4 162.7 -17.7 180.4C-70.7 198 -141.4 205.1 -167.4 173.3C-193.4 141.4 -174.7 70.7 -162.1 12.6C-149.5 -45.5 -143 -91 -117 -132.3C-91 -173.6 -45.5 -210.8 -0.9 -209.9C43.6 -208.9 87.2 -169.9 132.4 -128.5" />
                    </clipPath>
                  </defs>
                  <image
                    href="/images/amok-dish.jpg"
                    x="-250"
                    y="-250"
                    width="500"
                    height="500"
                    clipPath="url(#blobClip-3)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
