"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Music, Users, Mic, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
    {
        id: "singers",
        name: "Singers",
        description: "Professional vocalists for all genres",
        icon: Music,
        count: "150+ Artists",
        color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    {
        id: "dancers",
        name: "Dancers",
        description: "Choreographers and dance performers",
        icon: Users,
        count: "120+ Artists",
        color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    },
    {
        id: "speakers",
        name: "Speakers",
        description: "Motivational and keynote speakers",
        icon: Mic,
        count: "80+ Artists",
        color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    },
    {
        id: "djs",
        name: "DJs",
        description: "Professional DJs for all events",
        icon: Headphones,
        count: "100+ Artists",
        color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

const CategoryCards = () => {
    return (
        <section className="container mx-auto px-4">
            <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Browse by Category</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Find the perfect artist for your event from our diverse categories of talented performers
                </p>
            </motion.div>
            <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
                {categories.map((category) => {
                    const IconComponent = category.icon
                    return (
                        <motion.div key={category.id} variants={itemVariants}>
                            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                                <CardContent className="p-6 text-center space-y-4">
                                    <motion.div
                                    className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    >
                                        <IconComponent className="h-8 w-8" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                                        <p className="text-muted-foreground mb-3">{category.description}</p>
                                        <p className="text-sm text-primary font-medium">{category.count}</p>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                        asChild
                                        variant="outline"
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        >
                                            <Link href={`/artists?category=${category.id}`}>Explore {category.name}</Link>
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}

export default CategoryCards;