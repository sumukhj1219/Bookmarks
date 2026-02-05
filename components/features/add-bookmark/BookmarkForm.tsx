import Form from 'next/form'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Button from '@/components/ui/button'

const BookmarkForm = () => {
    return (
        <Form action={""} className='flex flex-col gap-y-3 max-w-2xl w-full'>
            <Label htmlFor='url' className='text-sm'>URL*</Label>
            <Input id='url' className='w-full' placeholder='https://example.com' />

            <Label htmlFor='name' className='text-sm'>Name</Label>
            <Input id='name' className='w-full' placeholder='Figma' />

            <Label htmlFor='description' className='text-sm'>Description</Label>
            <Input id='description' className='w-full' placeholder='Cloud-based UI/UX design tool' />

            <Button className='w-xl'>Save Bookmark</Button>
        </Form>
    )
}

export default BookmarkForm