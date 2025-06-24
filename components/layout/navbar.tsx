"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Music } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Browse Artists", href: "/artists" },
        { name: "Join as Artist", href: "/onboard" },
        { name: "Dashboard", href: "/dashboard" },
    ]

    const isActiveRoute = (href: string) => {
        if (href === "/") {
        return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    return (
        <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Music className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        </motion.div>
                        <span className="text-lg sm:text-xl font-bold">Artistly</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                        {navigation.map((item) => {
                            const isActive = isActiveRoute(item.href)
                            return (
                                <motion.div key={item.name} className="relative" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                    <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg ${
                                    isActive ? "text-white" : "text-muted-foreground hover:text-primary"
                                    }`}
                                    >
                                        {/* Active route background with gradient */}
                                        {isActive && (
                                            <motion.div
                                            layoutId="activeRoute"
                                            className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg shadow-lg"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                            />
                                        )}

                                        {/* Hover background for non-active routes */}
                                        {!isActive && (
                                            <motion.div
                                            className="absolute inset-0 bg-accent/50 rounded-lg opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            />
                                        )}

                                        {/* Text content */}
                                        <span className="relative z-10">{item.name}</span>

                                        {/* Active route glow effect */}
                                        {isActive && (
                                            <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg blur-sm opacity-30"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1.1, opacity: 0.3 }}
                                            transition={{
                                                duration: 0.3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                repeatType: "reverse",
                                                repeatDelay: 2,
                                            }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            )
                        })}

                        <div className="ml-4">
                            <ThemeToggle />
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                            size="sm"
                            className="text-sm bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-muted-foreground hover:text-foreground p-2 -mr-2"
                        aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                        className="lg:hidden py-4 border-t overflow-hidden"
                        >
                            <div className="flex flex-col space-y-2">
                                {navigation.map((item, index) => {
                                    const isActive = isActiveRoute(item.href)
                                    return (
                                        <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                        >
                                            <Link
                                            href={item.href}
                                            className={`relative block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            isActive ? "text-white" : "text-muted-foreground hover:text-primary"
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                            >
                                                {/* Active route background for mobile */}
                                                {isActive && (
                                                    <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg shadow-md"
                                                    initial={{ scale: 0.95, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                    />
                                                )}

                                                {/* Hover background for mobile non-active routes */}
                                                {!isActive && (
                                                    <div className="absolute inset-0 bg-accent/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200" />
                                                )}

                                                {/* Text content */}
                                                <span className="relative z-10">{item.name}</span>

                                                {/* Active indicator dot for mobile */}
                                                {isActive && (
                                                    <motion.div
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    )
                                })}

                                <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navigation.length * 0.1 }}
                                className="pt-2"
                                >
                                    <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                                        Get Started
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
