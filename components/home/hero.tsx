"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 dark:from-primary/5 dark:via-purple-950/20 dark:to-pink-950/20 py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <motion.h1
                            className="text-4xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Book Amazing
                                <span className="text-primary block">Performing Artists</span>
                                for Your Events
                            </motion.h1>
                            <motion.p
                            className="text-xl text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Connect with talented musicians, dancers, speakers, and DJs. Find the perfect artist for your event in
                                minutes, not weeks.
                            </motion.p>
                        </div>
                        <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" className="text-lg px-8">
                                    <Link href="/artists">
                                        Browse Artists
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="text-lg px-8">
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </motion.div>
                        {/* Stats */}
                        <motion.div
                        className="grid grid-cols-3 gap-8 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div>
                                <div className="text-3xl font-bold text-primary">500+</div>
                                <div className="text-muted-foreground">Artists</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">1000+</div>
                                <div className="text-muted-foreground">Events</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">50+</div>
                                <div className="text-muted-foreground">Cities</div>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Image */}
                    <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 dark:from-primary/10 dark:to-purple-800/20 rounded-3xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <motion.div
                                className="w-32 h-32 bg-background rounded-full flex items-center justify-center mx-auto shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                >
                                    <Play className="h-12 w-12 text-primary" />
                                </motion.div>
                                <p className="text-muted-foreground font-medium">Watch artists in action</p>
                            </div>
                        </div>
                        {/* Floating cards */}
                        <motion.div
                        className="absolute -top-4 -left-4 bg-background p-4 rounded-lg shadow-lg border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                                </div>
                                <span className="text-sm font-medium">Verified Artists</span>
                            </div>
                        </motion.div>
                        <motion.div
                        className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 dark:text-blue-400 text-sm">⚡</span>
                                </div>
                                <span className="text-sm font-medium">Instant Booking</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
