import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

const featuredArtists = [
    {
        id: 1,
        name: "Amy Winehouse",
        category: "Singer",
        location: "New York, NY",
        rating: 4.9,
        reviews: 127,
        priceRange: "$500-1000",
        image: "/home/amy.jpg?height=300&width=300",
        specialties: ["Jazz", "Pop", "Soul"],
    },
    {
        id: 2,
        name: "DJ Snake",
        category: "DJ",
        location: "Los Angeles, CA",
        rating: 4.8,
        reviews: 89,
        priceRange: "$300-800",
        image: "/home/snake.jpeg?height=300&width=300",
        specialties: ["Electronic", "Hip-Hop", "House"],
    },
    {
        id: 3,
        name: "Misty Copeland",
        category: "Dancer",
        location: "Miami, FL",
        rating: 5.0,
        reviews: 156,
        priceRange: "$400-900",
        image: "./home/misty.jpg?height=300&width=300",
        specialties: ["Latin", "Contemporary", "Ballet"],
    },
]

const FeaturedArtists = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Artists</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover our top-rated performers who consistently deliver exceptional experiences
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArtists.map((artist) => (
                    <Card key={artist.id} className="group hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                            {/* Image */}
                            <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                                <img
                                src={artist.image || "/placeholder.svg"}
                                alt={artist.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-foreground">{artist.name}</h3>
                                        <Badge variant="secondary">{artist.category}</Badge>
                                    </div>

                                    <div className="flex items-center text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4 mr-1 text-foreground" />
                                        <span className="text-sm text-foreground">{artist.location}</span>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-3">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium ml-1">{artist.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({artist.reviews} reviews)</span>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {artist.specialties.map((specialty) => (
                                            <Badge key={specialty} variant="outline" className="text-xs text-foreground">
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-primary">{artist.priceRange}</span>
                                    <Button size="sm">Ask for Quote</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <a href="/artists">View All Artists</a>
                </Button>
            </div>
        </section>
    )
}

export default FeaturedArtists;