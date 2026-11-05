import{Plus,Microphone,Cheveron} from '../../assets/index'
export default function MainContent(){
    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e3e3e3] flex flex-col items-center gap-6">
            <h1 className="text-4xl">Where Should we start</h1>
            <div className="bg-[#1e1f20] h-16 w-145 flex justify-between rounded-4xl items-center pb-3">
                <div>
                    <h1 className='flex items-center pt-2.5 gap-2 text-sm pl-4'><img src={Plus} alt="plus" className='h-5' />Ask Gemini</h1>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Cheveron} alt="^" className='h-5' />Gemini <span>Auto</span></h1>
                    <img src={Microphone} alt="mic" className='h-7 pt-2 pr-4'/>
                </div>
            </div>
        </div>
    )
};