"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import ArtistCardSkeleton from "./artist-card-skeleton"
import { motion } from "framer-motion"

const ArtistListingSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Filters skeleton */}
            <Card>
                <CardContent className="p-6">
                    <div className="space-y-4">
                        <motion.div
                        className="h-10 bg-muted rounded w-full"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                key={i}
                                className="h-10 bg-muted rounded"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: i * 0.1,
                                }}
                                />
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Artist cards skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    >
                        <ArtistCardSkeleton />
                </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ArtistListingSkeleton;