import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="p-2 flex flex-wrap">
      <div className="w-1/2 flex p-10">
        <p className="text-[5rem] font-bold font-serif m-auto text-stone-800 dark:text-stone-50">
          Infinite Blogs
        </p>
      </div>
      <div className="flex w-1/2 justify-center">
        <Image
          src={"/infinite-blogs-logos/infinite-blogs.jpeg"}
          width={300}
          height={300}
          alt="InfiniteBlogs logo"
          className="rounded-3xl shadow-lg m-4 mt-10"
        />
      </div>
    </div>
  );
}

export default Hero;
