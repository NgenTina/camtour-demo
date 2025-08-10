import React from "react";
import '../styles/three-blobs.css';

const ThreeBlobs = () => {
  return (
    <div className="space-y-6 -mt-[6em]">
      <div className="relative w-[20rem] h-56 mt-[4em] ml-[15em] float-blob-1">
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

      <div className="relative w-[28rem] h-72 -mt-[5em] -ml-[1em] float-blob-2">
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

      <div className="relative w-45 h-45 ml-auto float-blob-3">
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
  );
};

export default ThreeBlobs;
