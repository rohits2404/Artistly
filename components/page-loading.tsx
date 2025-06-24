"use client"

import React from "react"
import { motion } from "framer-motion"
import { Music } from "lucide-react"

const PageLoading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-6">
                <motion.div
                className="flex justify-center"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                >
                    <Music className="h-16 w-16 text-primary" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-2xl font-semibold mb-2">Loading Artistly</h2>
                    <p className="text-muted-foreground">Preparing your experience...</p>
                </motion.div>

                <motion.div
                className="flex justify-center space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                        }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default PageLoading;