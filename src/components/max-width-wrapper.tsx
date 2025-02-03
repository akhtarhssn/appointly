import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
}

const MaxWithWrapper = ({ children, className }: Props) => {
    return (
        <div className={cn("max-w-7xl mx-auto max-xl:px-5 py-10 lg:py-16", className)}>{children}</div>
    )
}

export default MaxWithWrapper