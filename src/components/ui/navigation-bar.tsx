import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

// Structure of Navigation bar
// Navigation:

// Home
// Categories
// About Us
// Contact

function NavigationBar() {
  return (
    <div className="flex w-full p-3">
      {/* Logo */}
      <div className="p-1 font-serif border border-red-600">
        <p>Logo</p>
      </div>
      {/* List of navigation buttons */}
      <div className="flex w-full justify-start">
        <Button variant="link">Home</Button>
        <Button variant="link">About</Button>
        <Button variant="link">Contact</Button>
        <Button variant="link">Categories</Button>
      </div>

      <div className="w-96 flex justify-end gap-8">
        {/* Search Bar */}
        <Input placeholder="Search..." type="text" />
        {/* Profile Settings */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default NavigationBar;
