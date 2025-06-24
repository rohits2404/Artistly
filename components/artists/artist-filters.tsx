"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Grid, List, Filter } from "lucide-react"
import type { FilterState } from "@/types"

interface ArtistFiltersProps {
    filters: FilterState
    onFiltersChange: (filters: FilterState) => void
    viewMode: "grid" | "list"
    onViewModeChange: (mode: "grid" | "list") => void
    resultCount: number
}

const categories = [
    { value: "all", label: "All Categories" },
    { value: "singer", label: "Singers" },
    { value: "dancer", label: "Dancers" },
    { value: "speaker", label: "Speakers" },
    { value: "dj", label: "DJs" },
]

const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "$200-500", label: "$200-500" },
    { value: "$500-1000", label: "$500-1000" },
    { value: "$1000-2000", label: "$1000-2000" },
    { value: "$2000+", label: "$2000+" },
]

const ArtistFilters = ({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange,
  resultCount,
}: ArtistFiltersProps) => {

    const updateFilter = (key: keyof FilterState, value: string) => {
        // Convert "all" values to empty strings for filtering logic
        const filterValue = value === "all" ? "" : value
        onFiltersChange({ ...filters, [key]: filterValue })
    }

    const clearFilters = () => {
        onFiltersChange({
            category: "",
            location: "",
            priceRange: "",
            search: "",
        })
    }

    const hasActiveFilters = Object.values(filters).some((value) => value !== "")

    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                        placeholder="Search artists, categories, or specialties..."
                        value={filters.search}
                        onChange={(e) => updateFilter("search", e.target.value)}
                        className="pl-10"
                        />
                    </div>
                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Category Filter */}
                        <Select value={filters.category || "all"} onValueChange={(value) => updateFilter("category", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {/* Location Filter */}
                        <Input
                        placeholder="Location"
                        value={filters.location}
                        onChange={(e) => updateFilter("location", e.target.value)}
                        />
                        {/* Price Range Filter */}
                        <Select value={filters.priceRange || "all"} onValueChange={(value) => updateFilter("priceRange", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Price Range" />
                            </SelectTrigger>
                            <SelectContent>
                                {priceRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                        {range.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {/* Clear Filters */}
                        <Button variant="outline" onClick={clearFilters} disabled={!hasActiveFilters} className="w-full">
                            <Filter className="h-4 w-4 mr-2" />
                            Clear Filters
                        </Button>
                    </div>
                    {/* Results and View Toggle */}
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-muted-foreground">
                            Showing {resultCount} artist{resultCount !== 1 ? "s" : ""}
                        </p>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">View:</span>
                            <div className="flex border rounded-md">
                                <Button
                                variant={viewMode === "grid" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => onViewModeChange("grid")}
                                className="rounded-r-none"
                                >
                                    <Grid className="h-4 w-4" />
                                </Button>
                                <Button
                                variant={viewMode === "list" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => onViewModeChange("list")}
                                className="rounded-l-none"
                                >
                                    <List className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArtistFilters;