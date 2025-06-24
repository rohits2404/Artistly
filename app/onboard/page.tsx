import React from "react"
import { PageTransition } from "@/components/page-transition"
import type { Metadata } from "next"
import ArtistOnboardingForm from "@/components/onboard/artist-onboarding-form"

export const metadata: Metadata = {
    title: "Artist Onboarding - Artistly",
    description: "Join Artistly as a performing artist. Create your profile and start receiving booking requests.",
}

const OnboardPage = () => {
    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2">Join Artistly</h1>
                    <p className="text-muted-foreground">Create Your Artist Profile and Start Receiving Booking Requests</p>
                </div>
                <ArtistOnboardingForm/>
            </div>
        </PageTransition>
    )
}

export default OnboardPage;
