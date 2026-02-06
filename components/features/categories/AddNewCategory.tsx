import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { useEffect, useState } from "react";
import { addCategory } from "./actions/addCategory";

interface AddNewCategoryProps {
    mount: boolean
}

const AddNewCategory = ({ mount }: AddNewCategoryProps) => {
    const [isVisible, setIsVisible] = useState(mount);
    
    useEffect(() => {
        setIsVisible(mount);
    }, [mount]);

    if (!isVisible) return null;

    return (
        <div className='z-20 max-w-xl absolute bg-neutral-900 p-3 w-full border border-neutral-800 rounded-xl'>
            <div className='flex flex-col gap-y-3'>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-y-1">
                        <span className="text-2xl">Add new category</span>
                        <p className="text-sm">Create a new category to organize your bookmarks</p>
                    </div>
                </div>
                <form action={addCategory} className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-1">
                        <Label className="text-xl">Slug</Label>
                        <Input id="slug" name="slug" placeholder="Slug" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Label className="text-xl">Name</Label>
                        <Input id="name" name="name" placeholder="Name" />
                    </div>

                    <Button type="submit" className="w-full">Create Category</Button>
                    <Button onClick={()=>setIsVisible(false)} className="w-full bg-transparent border border-neutral-800 text-neutral-100">Cancel</Button>
                </form>
            </div>
        </div>
    );
}

export default AddNewCategory