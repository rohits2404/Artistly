import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Calendar, CheckCircle } from "lucide-react"

const steps = [
    {
        step: 1,
        title: "Browse & Search",
        description: "Explore our curated list of talented artists or use filters to find exactly what you need.",
        icon: Search,
        color: "bg-blue-50 text-blue-600",
    },
    {
        step: 2,
        title: "Connect & Discuss",
        description: "Reach out to artists, discuss your event requirements, and get personalized quotes.",
        icon: Users,
        color: "bg-green-50 text-green-600",
    },
    {
        step: 3,
        title: "Book & Schedule",
        description: "Confirm your booking, set the date, and coordinate all the details for your event.",
        icon: Calendar,
        color: "bg-purple-50 text-purple-600",
    },
    {
        step: 4,
        title: "Enjoy Your Event",
        description: "Sit back and enjoy an amazing performance that will make your event unforgettable.",
        icon: CheckCircle,
        color: "bg-orange-50 text-orange-600",
    },
]

const HowItWorks = () => {
    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Booking the perfect artist for your event is simple and straightforward
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => {
                        const IconComponent = step.icon
                        return (
                            <Card key={step.step} className="relative text-center">
                                <CardContent className="p-6 space-y-4">
                                    {/* Step number */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mt-4`}>
                                        <IconComponent className="h-8 w-8" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;