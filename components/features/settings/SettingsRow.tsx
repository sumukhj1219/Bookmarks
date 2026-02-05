const SettingRow = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className='flex items-center justify-between py-3'>
        <span className='text-sm text-neutral-300'>{label}</span>
        <div className='flex items-center gap-x-3'>
            {children}
        </div>
    </div>
)

export default SettingRow