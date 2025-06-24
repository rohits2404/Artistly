import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from "lucide-react"
import type { Artist } from "@/types"

interface ArtistCardProps {
    artist: Artist
    viewMode: "grid" | "list"
}

const ArtistCard = ({ artist, viewMode }: ArtistCardProps) => {

    if (viewMode === "list") {

        return (
            <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="w-full md:w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Content */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-semibold text-foreground">{artist.name}</h3>
                                        <Badge variant="secondary">{artist.category}</Badge>
                                    </div>
                                    <div className="flex items-center text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className="text-sm">{artist.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-4 mb-3">
                                        <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium ml-1">{artist.rating}</span>
                                        <span className="text-sm text-gray-500 ml-1">({artist.reviews} reviews)</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span className="text-sm">{artist.experience}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary mb-2">{artist.priceRange}</div>
                                    <Button>Ask for Quote</Button>
                                </div>
                            </div>
                            <p className="text-muted-foreground line-clamp-2">{artist.bio}</p>
                            <div className="flex flex-wrap gap-2">
                                {artist.specialties.map((specialty) => (
                                    <Badge key={specialty} variant="outline" className="text-xs">
                                        {specialty}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="group hover:shadow-xl transition-all duration-300">
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
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{artist.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{artist.rating}</span>
                        </div>
                            <span className="text-sm text-gray-500">({artist.reviews} reviews)</span>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{artist.bio}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                            {artist.specialties.slice(0, 3).map((specialty) => (
                                <Badge key={specialty} variant="outline" className="text-xs">
                                {specialty}
                                </Badge>
                            ))}
                            {artist.specialties.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                +{artist.specialties.length - 3} more
                                </Badge>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{artist.priceRange}</span>
                        <Button size="sm">Ask for Quote</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArtistCard;