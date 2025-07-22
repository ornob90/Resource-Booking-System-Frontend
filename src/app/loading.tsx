import React from "react";
import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <ImSpinner9  size={90} className="animate-spin " />
    </section>
  );
};

export default loading;
