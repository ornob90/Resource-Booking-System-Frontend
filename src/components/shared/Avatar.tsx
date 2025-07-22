import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className=" size-[50px] md:size-[60px]   rounded-full border-2 border-gray-300 flex justify-center items-center"> 
        <Image
      src={"/smiling-young-man-illustration_1308-174669.avif"}
      alt={"Avatar"}
      width={50}
      height={50}
      className=" max-w-full max-h-full rounded-full  object-cover "
    />
    </div>
  );
};

export default Avatar;
