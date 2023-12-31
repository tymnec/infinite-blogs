"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "/public/infinite-blogs-logos/infinite-blogs.jpeg";
import Link from "next/link";
import { auth } from "@/app/firebase";

// Structure of Navigation bar
// Navigation:

// Home
// Categories
// About Us
// Contact

const NavigationBar = () => {
  return (
    <div className="flex w-full p-6 border my-3 mx-auto rounded-3xl shadow-lg">
      {/* Logo */}
      <div className="font-serif">
        <div className="w-11 ml-2 mr-5">
          <Image
            src={logo}
            alt="InfiniteBlogs logo"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* List of navigation buttons */}
      <div className="flex w-full justify-start gap-2 p-1">
        <Link href={"/"}>
          <Button variant={"default"}>Home</Button>
        </Link>
        <Link href={"/about"}>
          <Button variant={"ghost"}>About</Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant={"ghost"}>Contact</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"secondary"}>Categories</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Technology and Innovation</DropdownMenuItem>
            <DropdownMenuItem>Health and Wellness</DropdownMenuItem>
            <DropdownMenuItem>Travel and Adventure</DropdownMenuItem>
            <DropdownMenuItem>Personal Development</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-max flex justify-end gap-8 m-auto">
        {/* Search Bar */}
        <Input placeholder="Search..." type="text" className="w-60" />

        {auth.currentUser ? (
          <Avatar onClick={() => auth.signOut()} className="cursor-pointer">
            <AvatarImage
              src={
                auth.currentUser.photoURL
                  ? auth.currentUser.photoURL
                  : "https://github.com/shadcn.png"
              }
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex gap-3 m-auto">
            <Link href={"/register"}>
              <Button>Create Account</Button>
            </Link>
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
