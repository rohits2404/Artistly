import React from "react"
import Hero from "@/components/home/hero"
import CategoryCards from "@/components/home/category-cards"
import HowItWorks from "@/components/home/how-it-works"
import { PageTransition } from "@/components/page-transition"
import FeaturedArtists from "@/components/home/featured-artists"

const HomePage = () => {
    return (
        <PageTransition>
            <div className="space-y-16 pb-16">
                <Hero />
                <CategoryCards />
                <FeaturedArtists/>
                <HowItWorks />
            </div>
        </PageTransition>
    )
}

export default HomePage;