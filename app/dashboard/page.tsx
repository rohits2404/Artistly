import React from "react"
import { PageTransition } from "@/components/page-transition"
import type { Metadata } from "next"
import ManagerDashboard from "@/components/dashboard/manager-dashboard"

export const metadata: Metadata = {
    title: "Manager Dashboard - Artistly",
    description: "Manage your artists and booking requests from your dashboard.",
}

const DashboardPage = () => {
    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
                    <p className="text-muted-foreground">Manage Your Artists and Booking Requests</p>
                </div>
                <ManagerDashboard/>
            </div>
        </PageTransition>
    )
}

export default DashboardPage;
