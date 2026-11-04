import btnGemini from '../../assets/btn-gemini-ai-48.png'
import Download from '../../assets/1download-32.png'
import Edit from '../../assets/1edit-32.png'
export default function Header(){
    return(
        <header>
        <div className='flex  items-center pt-3 px-4 w-96 absolute right-0 justify-end'>
        <div className='flex items-center gap-3'>
            <div className='bg-[#1f3b9b] w-28 h-8 flex items-center rounded-4xl'>
                <button className='flex text-white pl-2 items-center gap-2 font-semibold text-sm'><img src={btnGemini} alt="btn" className='h-6' />Upgrade</button>
             </div>
        <div className='flex items-center gap-3'>
            <div className='bg-[#171717] w-28 h-8 flex items-center rounded-4xl'>
                <button className='flex text-white items-center gap-2 pl-2 font-semibold text-sm'><img src={Download} alt="btn" className='h-6' />Get app</button>
            </div>
       <img src={Edit} alt="edit" className = 'h-7'/>
       </div>
      </div> 
      </div>
        </header>
    )
}