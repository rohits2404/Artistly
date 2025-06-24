"use client"

import React from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
    children: ReactNode
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
}

const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4,
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            {children}
        </motion.div>
    )
}