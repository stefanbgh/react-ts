

const OrderSingleItem = () => {
    return (
        <div className='border border-gray-300 p-4 flex items-center'>
            <div className='w-1/6'>
                <p>$model</p>
            </div>
            <div className='w-2/6 flex gap-2'>
                <div className='flex flex-col justify-between'>
                    <p>$productName</p>
                    <p className='text-gray-400 text-sm'>$category</p>
                </div>
            </div>
            <div className='w-1/6'>
                <p>$timestamp</p>
            </div>
            <div className='w-1/6'>
                <div>$totalAmount</div>
            </div>
            <div className='w-1/6'>
                <p className='text-green-800 bg-green-300 border py-0.5 px-2 rounded-md inline-block'>$status</p>
            </div>
        </div>
    )
}

export default OrderSingleItem