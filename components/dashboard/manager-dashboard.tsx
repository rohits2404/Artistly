"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Edit, Trash2, Plus, Users, Calendar, DollarSign, TrendingUp } from "lucide-react"
import { mockArtistSubmissions } from "@/lib/mock-data"
import { useRouter } from "next/navigation"

const ManagerDashboard = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")

    const router = useRouter();

    const filteredSubmissions = mockArtistSubmissions.filter((submission) => {
        const matchesSearch =
        submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.location.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || !statusFilter || submission.status === statusFilter
        const matchesCategory = categoryFilter === "all" || !categoryFilter || submission.category === categoryFilter

        return matchesSearch && matchesStatus && matchesCategory
    })

    const stats = [
        {
            title: "Total Artists",
            value: "24",
            change: "+12%",
            icon: Users,
            color: "text-blue-600",
        },
        {
            title: "Active Bookings",
            value: "8",
            change: "+5%",
            icon: Calendar,
            color: "text-green-600",
        },
        {
            title: "Monthly Revenue",
            value: "$12,450",
            change: "+18%",
            icon: DollarSign,
            color: "text-purple-600",
        },
        {
            title: "Growth Rate",
            value: "23%",
            change: "+3%",
            icon: TrendingUp,
            color: "text-orange-600",
        },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "rejected":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const IconComponent = stat.icon
                    return (
                        <Card key={stat.title}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                        <p className="text-sm text-green-600">{stat.change} from last month</p>
                                    </div>
                                    <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            {/* Artist Management */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Artist Submissions</CardTitle>
                        <Button onClick={()=>router.push("/onboard")}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Artist
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                            placeholder="Search artists..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                            />
                        </div>
                        <Select value={statusFilter || "all"} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={categoryFilter || "all"} onValueChange={setCategoryFilter}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Singer">Singer</SelectItem>
                                <SelectItem value="Dancer">Dancer</SelectItem>
                                <SelectItem value="Speaker">Speaker</SelectItem>
                                <SelectItem value="DJ">DJ</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Table */}
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Artist</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Fee Range</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Submitted</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredSubmissions.map((submission) => (
                                    <TableRow key={submission.id}>
                                        <TableCell>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                                    <img
                                                    src={submission.image || "/placeholder.svg"}
                                                    alt={submission.name}
                                                    className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{submission.name}</div>
                                                    <div className="text-sm text-gray-500">{submission.email}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{submission.category}</TableCell>
                                        <TableCell>{submission.location}</TableCell>
                                        <TableCell>{submission.feeRange}</TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(submission.status)}>{submission.status}</Badge>
                                        </TableCell>
                                        <TableCell>{submission.submittedDate}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Button variant="ghost" size="sm">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {filteredSubmissions.length === 0 && (
                        <div className="text-center py-8">
                        <p className="text-gray-500">No artists found matching your criteria.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default ManagerDashboard;
