import React from "react"
import { PageTransition } from "@/components/page-transition"
import type { Metadata } from "next"
import ArtistListing from "@/components/artists/artist-listing"

export const metadata: Metadata = {
    title: "Browse Artists - Artistly",
    description: "Discover talented performing artists for your events. Filter by category, location, and price range.",
}

const ArtistsPage = () => {
    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Browse Artists</h1>
                    <p className="text-muted-foreground">Discover Talented Performers For Your Next Event</p>
                </div>
                <ArtistListing/>
            </div>
        </PageTransition>
    )
}

export default ArtistsPage;
