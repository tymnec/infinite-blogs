import { ModeToggle } from "@/components/ui/mode-toggle";
import NavigationBar from "@/components/navigation-bar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Categories from "@/components/categories";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

// Structure of Home Page
// Homepage:

// Featured Blog Posts
// Recent Blog Posts
// Categories/Topics
// Search Bar
// Call-to-Action for New Visitors

function HomePage() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <Hero />

      {/* Categories/ Topics */}
      <div className="w-max mt-10">
        <Categories />
      </div>

      {/* Dark Mode */}
      <div className="fixed bottom-5 right-5">
        <ModeToggle />
      </div>

      {/* Button for post */}
      <div>
        <Link href={"/add-post"}>
          <Button>Post</Button>
        </Link>
      </div>

      <br />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
