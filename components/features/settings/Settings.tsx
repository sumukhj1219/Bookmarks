import {  Upload, Download, Trash } from 'lucide-react'
import Rating from '@/components/commons/rating'
import SettingRow from './SettingsRow'
import Button from '@/components/ui/button'

const Settings = () => {
    return (
        <div className='flex flex-col gap-y-6 w-full  mx-auto '>
            
            <section className='border border-neutral-800 rounded-lg p-6 bg-neutral-900'>
                <h2 className='text-lg font-bold text-white mb-4'>General Settings</h2>
                <div className='flex flex-col '>
                    <SettingRow label="Default category">
                        <select className='bg-neutral-900 border border-neutral-800 text-sm rounded-md px-3 py-1.5 text-white outline-none focus:ring-1 focus:ring-blue-500 w-48'>
                            <option>Uncategorized</option>
                        </select>
                    </SettingRow>

                    <SettingRow label="Auto-fetch website data">
                        <input type="checkbox" className="toggle-checkbox hidden" id="autoFetch" />
                        <label htmlFor="autoFetch" className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 bg-white w-3 h-3 rounded-full"></div>
                        </label>
                    </SettingRow>

                    <SettingRow label="Default rating">
                           <Rating rate={2} />
                    </SettingRow>
                </div>
            </section>

            <section className='border border-neutral-800 rounded-lg p-6 bg-[#121212]'>
                <h2 className='text-lg font-bold text-white mb-4'>Appearance</h2>
                <div className='flex flex-col '>
                    <SettingRow label="Dark Mode">
                        <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                            <div className="absolute right-1 top-1 bg-white w-3 h-3 rounded-full"></div>
                        </div>
                    </SettingRow>

                    <SettingRow label="Language">
                        <select className='bg-neutral-900 border border-neutral-800 text-sm rounded-md px-3 py-1.5 text-white w-48'>
                            <option>English</option>
                        </select>
                    </SettingRow>
                </div>
            </section>

            <section className='border border-neutral-800 rounded-lg p-6 bg-[#121212]'>
                <h2 className='text-lg font-bold text-white mb-4'>Bookmark Management</h2>
                <div className='flex flex-col gap-y-4'>
                    <SettingRow label="Export bookmarks">
                        <Button className='flex items-center gap-x-2 bg-white text-black px-4 py-1.5 rounded text-sm font-medium hover:bg-neutral-200'>
                            <Download size={16} /> Export data
                        </Button>
                    </SettingRow>

                    <SettingRow label="Import bookmarks">
                        <div className='flex items-center gap-x-2'>
                            <div className='border border-neutral-800 bg-neutral-950 rounded px-3 py-1.5 text-xs text-neutral-500'>
                                Choose file No file chosen
                            </div>
                            <Button className='flex items-center gap-x-2 bg-white text-black px-4 py-1.5 rounded text-sm font-medium'>
                                <Upload size={16} /> Import
                            </Button>
                        </div>
                    </SettingRow>

                    <SettingRow label="Clear all bookmarks">
                        <Button className='flex items-center gap-x-2 bg-red-700 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-red-800'>
                            <Trash size={16} /> Clear all
                        </Button>
                    </SettingRow>
                </div>
            </section>

        </div>
    )
}

export default Settings