"use client";

import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UploadContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Simulate an artificial delay using setTimeout
    if (!selectedFile) {
      return;
    }

    setUploading(true);
    setTimeout(() => {
      console.log("Simulated upload complete");
      console.log("Selected file:", selectedFile);
      // Reset the file input and finish the artificial delay
      setSelectedFile(null);
      setUploading(false);
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
          <Label htmlFor="image" className="text-right">
            Image
          </Label>
          <Input
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
