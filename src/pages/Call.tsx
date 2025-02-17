import { useEffect } from "react";

const Call = () => {
  useEffect(() => {
    window.location.href = "tel:+18335313034";
  }, []);

  return <div>Calling...</div>;
};

export default Call;
