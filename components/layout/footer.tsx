import React from 'react'
import Link from "next/link"
import { Music, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Music className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold">Artistly</span>
                        </Link>
                        <p className="text-muted-foreground">
                            Connecting event planners with talented performing artists worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>
                    {/* For Event Planners */}
                    <div>
                        <h3 className="font-semibold mb-4">For Event Planners</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="/artists" className="hover:text-primary transition-colors">
                                Browse Artists
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* For Artists */}
                    <div>
                        <h3 className="font-semibold mb-4">For Artists</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="/onboard" className="hover:text-primary transition-colors">
                                Join as Artist
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-primary transition-colors">
                                Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2025 Artistly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
