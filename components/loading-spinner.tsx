"use client"

import { motion } from "framer-motion"
import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <motion.div
            className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
            }}
            />
        </div>
    )
}

export default LoadingSpinner