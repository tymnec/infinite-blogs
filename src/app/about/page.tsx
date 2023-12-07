import About from "@/components/about";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div>
      {/* Back Button */}
      <div className="fixed top-5 left-5">
        <Link href={"/"}>
          <Button>Back</Button>
        </Link>
      </div>

      {/* About Component */}
      <div className="mx-auto mt-16 flex w-full">
        <About />
      </div>
    </div>
  );
}

export default AboutPage;
