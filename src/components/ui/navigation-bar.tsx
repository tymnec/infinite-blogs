import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <div className="p-1 font-serif border border-red-600 mx-2">
        <p>Logo</p>
      </div>
      {/* List of navigation buttons */}
      <div className="flex w-full justify-start gap-2 p-1">
        <Button variant={"default"}>Home</Button>
        <Button variant={"ghost"}>About</Button>
        <Button variant={"ghost"}>Contact</Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"ghost"}>Categories</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>First Category</DropdownMenuItem>
            <DropdownMenuItem>Second Category</DropdownMenuItem>
            <DropdownMenuItem>Third Category</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
