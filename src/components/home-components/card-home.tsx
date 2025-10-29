import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon, Wallet } from 'lucide-react'

interface CardHomeProps {
  icon?: LucideIcon
  title: string
  profit: number
  percentage: number
}

export const CardHome = ({ icon: Icon = Wallet, title, profit, percentage }: CardHomeProps) => {
  return (
    <Card className="flex relative items-center justify-between p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
      <CardContent className="p-0 flex flex-col justify-start w-full">
        <span className="text-sm text-gray-400 dark:text-gray-500">{title}</span>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            ${profit?.toLocaleString()}
          </span>
          <span
            className={`font-medium ${percentage >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
          >
            {percentage >= 0 ? '+' : ''}
            {percentage}%
          </span>
        </div>
      </CardContent>

      <div className="w-9 h-9 absolute right-2 top-4 flex items-center justify-center bg-primary rounded-xl">
        <Icon className="w-4 h-4 text-white" />
      </div>
    </Card>
  )
}
