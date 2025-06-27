"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function Generator() {
  const [description, setDescription] = useState("");

  const requestGenWallPaper = async () => {
    try {
      const resp = await fetch("/api/generate-wallpaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });

      if (!resp.ok) {
        throw new Error("Failed to generate wallpaper");
      }

      const data = await resp.json();
      toast.success("Wallpaper generated successfully!", { description: data.description });
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  }
  
  const handleGenerate = () => {
    if (!description) {
      toast.error("Please enter a description!");
      return;
    }

    // Add logic to handle the description input
    console.log("Generating with description:", description);
    toast.success("Generating content...", { description });

    requestGenWallPaper();
  };

  return (
    <div className="flex w-full max-w-3xl mx-auto gap-4 mb-16 -mt-16">
      {/* Input Field */}
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your description here"
        className="w-full rounded-full border-2 border-purple-500/20 bg-white/5 px-6 py-6 text-lg focus-visible:outline-none"
      />

      {/* Button */}
      <Button
        onClick={handleGenerate}
        className="rounded-full bg-purple-600 px-8 py-6 text-lg font-semibold text-white hover:bg-purple-700"
      >
        Generate
      </Button>
    </div>
  );
}