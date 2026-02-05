import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>Categories</h1>
                    <h3 className='text-md text-neutral-500'>Organize your bookmarks by category</h3>
                </span>
            </div>
        </div>
    )
}

export default page