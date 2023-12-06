import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

function Home() {
  return (
    <div>
     Some Content

     <Button variant="default">Simple Button</Button>

     <Button variant="outline">Outline Button</Button>

     {/* Dark Mode */}
     <ModeToggle/>
    </div>
  )
}

export default Home