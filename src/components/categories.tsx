"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/lib/categories";
import Image from "next/image";
import { Button } from "./ui/button";

function Categories() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 ml-3">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {/* Category Item */}
        {categories.map((category) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            key={category.id}
          >
            <Card>
              <CardHeader>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg mx-auto mb-4"
                />
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>

                <div className="flex justify-center pt-3">
                  <Button variant={"secondary"}>View Posts</Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}

        <div className="align-center m-auto text-stone-100 text-sm">
          More Comming ...
        </div>
      </div>
    </div>
  );
}

export default Categories;
