import { ReactNode } from 'react'
import { cn } from '../../../lib/utils'

interface ArticleGridProps {
    children: ReactNode
    className?: string
}

export function ArticleGrid({ children, className }: ArticleGridProps) {
    return <div className={cn('container px-4 mx-auto', className)}>{children}</div>
}