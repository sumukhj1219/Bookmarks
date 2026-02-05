import React from 'react'
import Input from '../ui/input'
import Button from '../ui/button'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between h-16 p-3 border-b border-neutral-800 bg-neutral-900'>
        <Input placeholder='Search anything...' />
        <Button>New Bookmark</Button>
    </nav>
  )
}

export default Navbar