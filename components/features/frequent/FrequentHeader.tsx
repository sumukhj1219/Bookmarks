import Button from '@/components/ui/button'
import { Grid, List } from 'lucide-react'

interface FrequentHeaderProps {
    grid: boolean;
    setGrid: (grid: boolean) => void;
}

const FrequentHeader = ({ grid, setGrid }: FrequentHeaderProps) => {
    return (
        <div className='flex items-center justify-between'>
            <span className='flex flex-col '>
                <h1 className='text-2xl text-neutral-100'>Frequent</h1>
                <h3 className='text-md text-neutral-500'>Your most visited bookmarks, always at hand.</h3>
            </span>

            <div className='flex gap-x-2'>
                <Button
                    onClick={() => setGrid((prev: boolean) => !prev)}
                    className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
                    {
                        !grid ?
                            <>
                                <Grid className='w-4 h-4' />
                                Grid
                            </>
                            :
                            <>
                                <List className='w-4 h-4' />
                                List
                            </>
                    }
                </Button>
            </div>
        </div>
    )
}

export default FrequentHeader