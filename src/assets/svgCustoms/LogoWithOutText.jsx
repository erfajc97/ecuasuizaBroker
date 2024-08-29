import React from "react";

const LogoWithOutText = ({ width = 57, height = 67, color = "#fff" }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 57 63"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.6167 61.1903C24.9604 61.7046 24 61.237 24 60.4032V49.0547C24 48.4191 24.3021 47.8214 24.8138 47.4444L35.6143 39.488C37.2728 38.2662 37.2348 35.7748 35.5398 34.6041L25.2977 27.5306C24.1703 26.752 24.1419 25.096 25.2419 24.2792L32.7205 18.7263C33.4692 18.1705 34.5027 18.2057 35.2117 18.8113L49.0651 30.6436C52.9086 33.9264 52.7822 39.9067 48.8033 43.0241L25.6167 61.1903Z"
          fill={color}
        />
        <path
          d="M31.8807 1.27727C32.5365 0.759961 33.5 1.22711 33.5 2.06242V13.4279C33.5 14.0491 33.2114 14.635 32.7189 15.0136L21.7123 23.4743C20.1144 24.7026 20.1581 27.1257 21.7991 28.2956L31.7618 35.398C32.8672 36.1861 32.883 37.823 31.7931 38.6323L24.2492 44.2336C23.5145 44.7791 22.5032 44.7564 21.7937 44.1784L7.73716 32.7272C3.76754 29.4933 3.81542 23.4145 7.83548 20.2436L31.8807 1.27727Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default LogoWithOutText;