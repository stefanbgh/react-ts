

const Settings = () => {
    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <p className='font-bold'>Settings</p>
            </div>
            <div className='p-4 border border-gray-300 flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <p>Notification</p>
                    <div>$toggle</div>
                </div>
                <div className='flex justify-between'>
                    <p>Messages</p>
                    <div>$toggle</div>
                </div>
            </div>
        </div>
    )
}

export default Settings