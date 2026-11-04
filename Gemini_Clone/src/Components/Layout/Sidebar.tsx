import GeminiOg from '../../assets/gemini.svg'
import Clock from '../../assets/clock-32.png'
import Graduo from '../../assets/graduation-cap-80.png'
import Grid from '../../assets/grid-2-24.png'
import Banana from '../../assets/peeled-banana-64.png'
import Profile from '../../assets/profile-24.png'
import Search from '../../assets/search-50.png'
import Setting from '../../assets/settings-50.png'
import Edit from '../../assets/1edit-32.png'

export default function Sideabar(){
    return(
      <div className='pt-3 pl-4 flex flex-col w-[4.5%] justify-between bg-[#0f0f0f] h-screen'>
        <div>
            <img src={GeminiOg} alt=""  className='h-7 pt-[10px]'/>
            <img src={Edit} alt="edit" className='h-7 pt-[10px]'/>
            <img src={Search} alt="search" className='h-7 pt-[10px]'/>
            <img src={Grid} alt="menu" className='h-7 pt-[10px]'/>
            <img src={Banana} alt="pealed" className='h-7 pt-[10px]'/>
            <img src={Clock} alt="clock" className='h-7 pt-[10px]'/>
            <img src={Graduo} alt="graduo" className='h-7 pt-[10px]'/>
        </div>
        <div className='pb-4'>
            <img src= {Setting} alt="setting" className='h-7 pt-[10px]' />
            <img src={Profile} alt="profile pc" className='h-7 pt-[10px]'/>
        </div>
      </div>
    )
}