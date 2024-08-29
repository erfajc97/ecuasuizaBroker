import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento cuando se desmonta el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

const getDeviceType = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return isMobile ? "mobile" : "desktop";
};

export default useDeviceType;
