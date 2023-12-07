import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Contact from "@/components/contact";

function ContactPage() {
  return (
    <>
      {/* Back Button */}
      <div className="fixed top-5 left-5">
        <Link href={"/"}>
          <Button>Back</Button>
        </Link>
      </div>

      {/* Contact Component */}
      <div className="flex w-max mx-auto mt-16">
        <div className="w-96 border p-8 rounded-3xl shadow-lg">
          <h1 className="text-3xl my-4">Contact US</h1>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
