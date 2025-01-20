export default function SkeletonCard() {
  return (
    <div className='mx-auto w-full rounded-sm border p-4 shadow-sm'>
      <div className='flex animate-pulse space-x-4'>
        <div className='h-[64px] w-[64px] bg-slate-400'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 rounded bg-slate-400'></div>
          <div className='h-[1px] bg-slate-400'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2 h-2 rounded bg-slate-400'></div>
              <div className='col-span-1 h-2 rounded bg-slate-400'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
