import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className=" size-[50px] md:size-[50px]   rounded-full border-2 border-gray-300 flex justify-center items-center"> 
        <Image
      src={"/profile.jpg"}
      alt={"Avatar"}
      width={40}
      height={40}
      className=" max-w-full max-h-full rounded-full  object-cover "
    />
    </div>
  );
};

export default Avatar;
