
const LoadingRing = ({ className = "", size = "md" }) => {
  // Size variants mapping (you can adjust these values)
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-spin`}>
      <svg
        viewBox="0 0 49 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g filter="url(#filter0_i_235_969)">
          <path
            d="M31.1345 3.97071C32.0956 1.30877 35.0753 -0.112843 37.4732 1.39058C40.6786 3.40038 43.3849 6.15325 45.3452 9.44549C48.186 14.2163 49.2848 19.8245 48.4542 25.3145C47.6236 30.8046 44.9151 35.8368 40.7902 39.5537C36.6653 43.2707 31.3792 45.4424 25.8326 45.6988C20.286 45.9553 14.8221 44.2806 10.3718 40.96C5.92154 37.6395 2.7603 32.8787 1.4267 27.4887C0.0931131 22.0987 0.669687 16.413 3.05818 11.4005C4.70644 7.94143 7.14719 4.95061 10.1535 2.65363C12.4024 0.935378 15.5005 2.07599 16.7032 4.6379C17.9058 7.19981 16.6978 10.2058 14.7497 12.2586C13.7622 13.2991 12.9365 14.4952 12.3104 15.8092C10.9418 18.6812 10.6115 21.9389 11.3756 25.0272C12.1397 28.1154 13.951 30.8432 16.5008 32.7457C19.0506 34.6483 22.1813 35.6078 25.3593 35.4609C28.5373 35.314 31.566 34.0697 33.9294 31.94C36.2928 29.8103 37.8447 26.927 38.3206 23.7814C38.7965 20.6358 38.167 17.4225 36.5393 14.6891C35.7946 13.4384 34.862 12.3236 33.7828 11.3787C31.6535 9.51432 30.1733 6.63266 31.1345 3.97071Z"
            fill="url(#paint0_linear_235_969)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_235_969"
            x="0.724121"
            y="0.77832"
            width="50"
            height="48.1463"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="6" />
            <feGaussianBlur stdDeviation="1.6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_235_969"
            />
          </filter>
          <linearGradient
            id="paint0_linear_235_969"
            x1="-4.27582"
            y1="10.2244"
            x2="47.2978"
            y2="29.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBF9F4" />
            <stop offset="1" stopColor="#C4AC69" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LoadingRing;
