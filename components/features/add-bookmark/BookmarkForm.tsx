"use client"

import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Button from '@/components/ui/button'
import Select from '@/components/ui/select'
import { categoryOptions } from '@/config/categories'
import { addProduct } from './actions/addProduct'

const BookmarkForm = () => {

    return (
        <form action={addProduct} className='flex flex-col gap-y-3 max-w-2xl w-full'>
            <Label htmlFor='url' className='text-sm'>URL*</Label>
            <Input id='url' name='url'  className='w-full' placeholder='https://example.com' />

            <Label htmlFor='name' className='text-sm'>Name</Label>
            <Input id='name' name='name' className='w-full' placeholder='Figma' />

            <Label htmlFor='description' className='text-sm'>Description</Label>
            <Input id='description' name='description' className='w-full' placeholder='Cloud-based UI/UX design tool' />

            <Label htmlFor='category' className='text-sm'>Category</Label>
            <Select items={categoryOptions} id="category" name='category' />

            <Button className='w-xl' type={"submit"}>Save Bookmark</Button>
        </form>
    )
}

export default BookmarkForm