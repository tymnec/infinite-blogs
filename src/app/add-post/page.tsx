"use client";

import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

function AddPost() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // You can perform any asynchronous actions here (e.g., API calls, etc.)
    // If you are using Next.js, you can navigate programmatically
    // to another page after form submission
    // Example:
    // router.push('/success');
  }

  return (
    <div className="container mt-16 p-4">
      <div className="fixed top-5 left-5">
        <Link href={"/"}>
          <Button variant="outline" className="mb-4">
            Back
          </Button>{" "}
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 ml-3">Post Blog</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Category */}
            <FormField
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology-and-innovation">
                          Technology and Innovation
                        </SelectItem>
                        <SelectItem value="health-and-wellness">
                          Health and Wellnesss
                        </SelectItem>
                        <SelectItem value="travel-and-adventure">
                          Travel and Adventure
                        </SelectItem>
                        <SelectItem value="personal-development">
                          Personal Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Write your blog post here"
                      {...field}
                      rows={6}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddPost;
