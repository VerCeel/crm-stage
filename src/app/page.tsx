import { Toggle } from '@/components/ui/toggle'
import { Moon } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Toggle>
        <Moon />
      </Toggle>
    </div>
  )
}

export default Home