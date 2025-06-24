"use client"

import React, { useRef, useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProfileImageUpload = () => {
    
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
        setSelectedFile(file)
        const reader = new FileReader()
        reader.onload = () => setPreviewUrl(reader.result as string)
        reader.readAsDataURL(file)
        }
    }

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Profile Image (Optional)</label>
            <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center cursor-pointer"
            onClick={handleButtonClick}
            >
                {previewUrl ? (
                    <img
                    src={previewUrl}
                    alt="Preview"
                    className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
                    />
                ) : (
                    <>
                        <Upload className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PNG, JPG up to 5MB</p>
                    </>
                )}
                <Button
                type="button"
                variant="outline"
                className="mt-4"
                onClick={(e) => {
                    e.stopPropagation() // Prevent double trigger
                    handleButtonClick()
                }}
                >
                    Choose File
                </Button>
                <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
                />
            </div>
        </div>
    )
}

export default ProfileImageUpload
