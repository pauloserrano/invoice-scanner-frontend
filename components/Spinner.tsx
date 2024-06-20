export const Spinner = () => {
  return (
    <div className="inline-block relative w-20 h-10 text-custom-color">
      <div className="absolute left-[8px] top-[33.33333px] w-[13.33333px] h-[13.33333px] rounded-full bg-current animate-lds-ellipsis1"></div>
      <div className="absolute left-[8px] top-[33.33333px] w-[13.33333px] h-[13.33333px] rounded-full bg-current animate-lds-ellipsis2"></div>
      <div className="absolute left-[32px] top-[33.33333px] w-[13.33333px] h-[13.33333px] rounded-full bg-current animate-lds-ellipsis2"></div>
      <div className="absolute left-[56px] top-[33.33333px] w-[13.33333px] h-[13.33333px] rounded-full bg-current animate-lds-ellipsis3"></div>
    </div>
  )
}
