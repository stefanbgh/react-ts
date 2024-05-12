import { AdminReviewSingleCard } from "../..";

const AdminReviewCards = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-4 w-full'> 
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
            </div>
            <div className='flex justify-between gap-4 w-full'> 
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
            </div>
            <div className='flex justify-between gap-4 w-full'> 
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
            </div>
            <div className='flex justify-between gap-4 w-full'> 
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
                <AdminReviewSingleCard />
            </div>
        </div>
    )
}

export default AdminReviewCards