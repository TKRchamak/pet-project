"use client";

import React, { useRef, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";

const UploadContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (event: any) => {
    // Simulate an artificial delay using setTimeout
    if (!selectedFile) {
      toast({
        variant: "destructive",
        title: "You have not selected any image!",
      });
      return;
    }

    setUploading(true);
    setTimeout(() => {
      console.log("Simulated upload complete");
      console.log("Selected file:", selectedFile);
      // Reset the file input and finish the artificial delay
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
      setSelectedFile(null);
      setUploading(false);
      toast({
        title: "Successfully uploaded image!",
        description: "You can upload another image.",
      });
    }, 3000); // 3000 milliseconds (2 seconds) delay
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Upload image</DialogTitle>
        <DialogDescription>
          Browse your device to find and upload an image.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="image">Image</Label>
          <Input
            ref={imageInputRef}
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default UploadContent;
