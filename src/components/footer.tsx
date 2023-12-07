import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white pt-8 pb-4 rounded-t-3xl">
      <div className="container mx-auto text-center font-mono">
        <p>&copy; 2023 Infinite Blogs. All rights reserved.</p>
        <p className="mt-2">Built with Next Js and Shadcn UI</p>
      </div>
    </footer>
  );
};

export default Footer;
