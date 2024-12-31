
import { CiMenuKebab } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
function HeadCount( {type,count}) {
  return (
    <>
    <div className='flex flex-col justify-center items-center
         p-4 bg-slate-300 rounded-md shadow-md'>
        <div className='flex justify-between items-center'>
            <div className='text-center rounded-full text-md h-5 w-8 bg-slate-300 text-green-400'>
              2024/25
            </div>
            <div>
                <CiMenuKebab className='text-4xl text-center rotate-90'/>
            </div>
    
        </div>
        <h1 className='text-sxl font-semibold text-center'>{count}</h1>
        <p className='text-lg text-center'>{type}</p>
    </div>
    </>
  )
}

export default HeadCount