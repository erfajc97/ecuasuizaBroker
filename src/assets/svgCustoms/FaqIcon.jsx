const FaqIcon = ({ width = "64px", height = "40px", color = "#08A262" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_23)">
        <path
          d="M31.0197 40.8914C29.1899 40.8914 27.7084 42.345 27.7084 44.0892C27.7084 45.7918 29.1462 47.2869 31.0197 47.2869C32.8932 47.2869 34.3747 45.7919 34.3747 44.0892C34.3747 42.345 32.8499 40.8914 31.0197 40.8914Z"
          fill={color}
        />
        <path
          d="M31.5863 16.6799C25.7042 16.6799 23.0028 20.0022 23.0028 22.2448C23.0028 23.8645 24.4406 24.612 25.6171 24.612C27.9698 24.612 27.0113 21.4142 31.4556 21.4142C33.6342 21.4142 35.3771 22.3279 35.3771 24.2382C35.3771 26.4809 32.9371 27.7682 31.4992 28.931C30.2357 29.9692 28.5799 31.672 28.5799 35.2435C28.5799 37.4029 29.1898 38.0259 30.9763 38.0259C33.1113 38.0259 33.5469 37.1123 33.5469 36.3232C33.5469 34.1637 33.5907 32.9178 35.9871 31.1322C37.1634 30.2601 40.8671 27.4361 40.8671 23.5323C40.8671 19.6285 37.1634 16.6799 31.5863 16.6799Z"
          fill={color}
        />
        <path
          d="M32 0C14.3145 0 0 13.6412 0 30.5V58.6172C0 59.9332 1.11925 61 2.5 61H32C49.6854 61 64 47.3588 64 30.5C64 13.6435 49.6879 0 32 0ZM32 56.2344H5V30.5C5 16.2773 17.0759 4.76562 32 4.76562C46.9221 4.76562 59 16.2754 59 30.5C59 44.7226 46.9241 56.2344 32 56.2344Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_23">
          <rect width={width} height={61} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FaqIcon;