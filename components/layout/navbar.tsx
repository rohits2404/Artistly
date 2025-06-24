"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Music } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    const location = usePathname();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Browse Artists", href: "/artists" },
        { name: "Join as Artist", href: "/onboard" },
        { name: "Dashboard", href: "/dashboard" },
    ]

    return (
        <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Music className="h-8 w-8 text-primary" />
                        </motion.div>
                        <span className="text-xl font-bold">Artistly</span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => {
                            const isActive = location === item.href;
                            return (
                                <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                    <Link
                                    href={item.href}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                                        isActive
                                        ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            );
                        })}
                        <ThemeToggle />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button>Get Started</Button>
                        </motion.div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-foreground">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden py-4 border-t overflow-hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navigation.map((item, index) => {
                                    const isActive = location === item.href
                                    return(
                                        <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                            href={item.href}
                                            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                                                isActive
                                                    ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                                <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navigation.length * 0.1 }}
                                >
                                    <Button className="w-fit">Get Started</Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
