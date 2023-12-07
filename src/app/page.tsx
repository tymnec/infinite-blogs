import { ModeToggle } from "@/components/ui/mode-toggle";
import NavigationBar from "@/components/navigation-bar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Structure of Home Page
// Homepage:

// Featured Blog Posts
// Recent Blog Posts
// Categories/Topics
// Search Bar
// Call-to-Action for New Visitors

function HomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Call-to-Action for New Visitors */}
      <p>Call-to-Action for New Visitors</p>

      {/* Search Bar */}
      <p>Search Bar</p>

      {/* Featured Blog Posts */}
      <p>Featured Blog Posts</p>

      {/* Categories/ Topics */}
      <p>Categories/ Topics</p>

      {/* Recent Blog Posts */}
      <p>Recent Blog Posts</p>

      {/* Dark Mode */}
      <div className="fixed bottom-5 right-5">
        <ModeToggle />
      </div>

      <Link href={"/register"}>
        <Button>Create Account</Button>
      </Link>
    </>
  );
}

export default HomePage;
