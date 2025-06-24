"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import ProfileImageUpload from "./Upload"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    categories: z.array(z.string()).min(1, "Please select at least one category"),
    languages: z.array(z.string()).min(1, "Please select at least one language"),
    feeRange: z.string().min(1, "Please select a fee range"),
    location: z.string().min(2, "Please enter your location"),
    experience: z.string().min(1, "Please enter your experience"),
    specialties: z.string().min(10, "Please describe your specialties"),
    website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
    socialMedia: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const categories = ["Singer", "Dancer", "Speaker", "DJ", "Musician", "Comedian", "Magician", "Actor"]

const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Hindi",
    "Mandarin",
    "Japanese",
    "Korean",
]

const feeRanges = ["$200-500", "$500-1000", "$1000-2000", "$2000-5000", "$5000+"]

const ArtistOnboardingForm = () => {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            bio: "",
            categories: [],
            languages: [],
            feeRange: "",
            location: "",
            experience: "",
            specialties: "",
            website: "",
            socialMedia: "",
        },
    })

    const watchedFeeRange = watch("feeRange")

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Form submitted:", { ...data, categories: selectedCategories, languages: selectedLanguages })
        // Show success message
        toast.success("Application submitted successfully! We'll review your profile and get back to you within 2-3 business days.")
        setIsSubmitting(false)
        reset()
        setSelectedCategories([])
        setSelectedLanguages([])
    }

    const toggleCategory = (category: string) => {
        const updated = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
        setSelectedCategories(updated)
        setValue("categories", updated)
    }

    const toggleLanguage = (language: string) => {
        const updated = selectedLanguages.includes(language)
        ? selectedLanguages.filter((l) => l !== language)
        : [...selectedLanguages, language]
        setSelectedLanguages(updated)
        setValue("languages", updated)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <Input
                            id="name"
                            placeholder="Enter your full name"
                            {...register("name")}
                            className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                Phone Number *
                            </label>
                            <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="location" className="text-sm font-medium text-gray-700">
                                Location *
                            </label>
                            <Input
                            id="location"
                            placeholder="City, State/Country"
                            {...register("location")}
                            className={errors.location ? "border-red-500" : ""}
                            />
                            {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium text-gray-700">
                        Bio *
                        </label>
                        <Textarea
                        id="bio"
                        placeholder="Tell us about yourself, your background, and what makes you unique as a performer..."
                        className={`min-h-[120px] ${errors.bio ? "border-red-500" : ""}`}
                        {...register("bio")}
                        />
                        {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}
                    </div>
                </CardContent>
            </Card>
            {/* Professional Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Categories */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">Categories * (Select all that apply)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {categories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                    id={category}
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => toggleCategory(category)}
                                    />
                                    <label htmlFor={category} className="text-sm font-medium cursor-pointer">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {selectedCategories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedCategories.map((category) => (
                                    <Badge key={category} variant="secondary" className="flex items-center gap-1">
                                        {category}
                                        <X className="h-3 w-3 cursor-pointer" onClick={() => toggleCategory(category)} />
                                    </Badge>
                                ))}
                            </div>
                        )}
                        {errors.categories && <p className="text-sm text-red-600">{errors.categories.message}</p>}
                    </div>
                    {/* Languages */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">Languages Spoken * (Select all that apply)</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {languages.map((language) => (
                                <div key={language} className="flex items-center space-x-2">
                                    <Checkbox
                                    id={language}
                                    checked={selectedLanguages.includes(language)}
                                    onCheckedChange={() => toggleLanguage(language)}
                                    />
                                    <label htmlFor={language} className="text-sm font-medium cursor-pointer">
                                        {language}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {selectedLanguages.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedLanguages.map((language) => (
                                    <Badge key={language} variant="secondary" className="flex items-center gap-1">
                                        {language}
                                        <X className="h-3 w-3 cursor-pointer" onClick={() => toggleLanguage(language)} />
                                    </Badge>
                                ))}
                            </div>
                        )}
                        {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Fee Range *</label>
                            <Select onValueChange={(value) => setValue("feeRange", value)} value={watchedFeeRange}>
                                <SelectTrigger className={errors.feeRange ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select your fee range" />
                                </SelectTrigger>
                                <SelectContent>
                                    {feeRanges.map((range) => (
                                        <SelectItem key={range} value={range}>
                                            {range}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.feeRange && <p className="text-sm text-red-600">{errors.feeRange.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                                Years of Experience *
                            </label>
                            <Input
                            id="experience"
                            placeholder="e.g., 5+ years"
                            {...register("experience")}
                            className={errors.experience ? "border-red-500" : ""}
                            />
                            {errors.experience && <p className="text-sm text-red-600">{errors.experience.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="specialties" className="text-sm font-medium text-gray-700">
                        Specialties & Skills *
                        </label>
                        <Textarea
                        id="specialties"
                        placeholder="Describe your specialties, unique skills, and what sets you apart..."
                        className={`min-h-[100px] ${errors.specialties ? "border-red-500" : ""}`}
                        {...register("specialties")}
                        />
                        {errors.specialties && <p className="text-sm text-red-600">{errors.specialties.message}</p>}
                    </div>
                </CardContent>
            </Card>
            {/* Additional Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="website" className="text-sm font-medium text-gray-700">
                                Website (Optional)
                            </label>
                            <Input
                            id="website"
                            placeholder="https://yourwebsite.com"
                            {...register("website")}
                            className={errors.website ? "border-red-500" : ""}
                            />
                            {errors.website && <p className="text-sm text-red-600">{errors.website.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="socialMedia" className="text-sm font-medium text-gray-700">
                                Social Media (Optional)
                            </label>
                            <Input id="socialMedia" placeholder="Instagram, YouTube, etc." {...register("socialMedia")} />
                        </div>
                    </div>
                    {/* Profile Image Upload */}
                    <ProfileImageUpload/>
                </CardContent>
            </Card>
            {/* Submit Button */}
            <div className="flex justify-center">
                <Button type="submit" size="lg" className="px-12" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
            </div>
        </form>
    )
}

export default ArtistOnboardingForm;
