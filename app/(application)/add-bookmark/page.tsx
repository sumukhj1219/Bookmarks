import AddBookmark from '@/components/features/add-bookmark/AddBookmark'

const page = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>Add new bookmark</h1>
                    <h3 className='text-md text-neutral-500'>Save a new bookmark to your collection</h3>
                </span>
            </div>
            <AddBookmark />
        </div>
    )
}

export default page