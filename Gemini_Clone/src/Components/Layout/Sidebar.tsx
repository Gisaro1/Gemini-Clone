import GeminiOg from '../../assets/gemini.svg'
import Clock from '../../assets/clock-32.png'
import Graduo from '../../assets/graduation-cap-80.png'
import Grid from '../../assets/grid-2-24.png'
import Banana from '../../assets/peeled-banana-64.png'
import Profile from '../../assets/profile-24.png'
import Search from '../../assets/search-50.png'
import Setting from '../../assets/settings-50.png'
import Edit from '../../assets/1edit-32.png'
import SidePanel from '../../assets/sidebar-48 (2).png'
import Gsidepanel from '../../assets/Hgraysidebar-48 (1).png'
import Gclock from '../../assets/Grayclock-32.png'
import Ggraduo from '../../assets/Graygraduation-cap-80.png'
import Ggrid from '../../assets/Graygrid-2-24.png'
import Gbanana from '../../assets/Graypeeled-banana-64.png'
import Gprofile from '../../assets/Grayprofile-24.png'
import Gsearch from '../../assets/Graysearch-50.png'
import Gsetting from '../../assets/Graysetting-50.png'
import Gedit from '../../assets/Grayedit-32.png'
import Gmore from '../../assets/icons8-more-30.png'
import Plus from '../../assets/addition-24.png'
import Book from '../../assets/notebook-24.png'
import Filter from '../../assets/filter-50.png'
import {useState} from 'react'

export default function Sideabar(){
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    return(
      <div>
        <div className={`pt-3 pl-4 flex-col w-[4.5%] justify-between bg-[#0f0f0f] h-screen ${isPanelOpen ? 'hidden' : 'flex'}`}>
            <div>
                <div className="group relative cursor-pointer" onClick={() => setIsPanelOpen(true)}>
                    <img src={GeminiOg} alt="" className="absolute object-cover transition-opacity duration-300 group-hover:opacity-0 h-7 pt-2.5"/>
                    <img src={SidePanel} alt="Close" className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-7 pt-2.5"/>
                </div>
                <img src={Edit} alt="edit" className='h-7 pt-2.5'/>
                <img src={Search} alt="search" className='h-7 pt-2.5'/>
                <img src={Grid} alt="menu" className='h-7 pt-2.5'/>
                <img src={Banana} alt="pealed" className='h-7 pt-2.5'/>
                <img src={Clock} alt="clock" className='h-7 pt-2.5'/>
                <img src={Graduo} alt="graduo" className='h-7 pt-2.5'/>
            </div>
            <div className='pb-4'>
                <img src= {Setting} alt="setting" className='h-7 pt-2.5' />
                <img src={Profile} alt="profile pc" className='h-7 pt-2.5'/>
            </div>
        </div>
       <div className={`pt-3 pl-4 flex-col w-[18.5%] justify-between bg-[#1f1f1f] h-screen text-[#e6e6e6] font-semibold ${isPanelOpen ? 'flex' : 'hidden'}`}>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={GeminiOg} alt="" className="h-5 "/>Gemini</h1>
                    <div className=' flex pr-3 gap-3'>
                        <img src={Gsearch} alt="search" className='h-7 pt-2.5'/>
                        <img src={Gsidepanel} alt="close" className='h-7 pt-2.5 cursor-pointer' onClick={() => setIsPanelOpen(false)}/>
                    </div>

                </div>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Ggrid} alt="menu" className='h-5'/>Library</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Gedit} alt="edit" className='h-5'/>New chat</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Gbanana} alt="pealed" className='h-5'/>Images</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Gclock} alt="clock" className='h-5'/>Schedule</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Ggraduo} alt="graduo" className='h-5'/>Students</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Gmore} alt="more" className='h-5'/>More</h1>
                <h1 className='text-sm pt-7'>Notebooks</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Plus} alt="addition" className='h-5' /> New notebook</h1>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Book} alt="book"  className='h-5'/>Recent chat</h1>
                <div className='flex justify-between pt-4'>
                    <h1 className='flex items-center text-sm'>All</h1>
                    <img src={Filter} alt="filter icon"  className='h-4 pr-3'/>
                </div>
            </div>
            <div className='pb-4 flex justify-between items-center'>
                <h1 className='flex items-center pt-2.5 gap-2 text-sm'><img src={Gprofile} alt="profile pc" className='h-5 '/>Username</h1>
                <img src= {Gsetting} alt="setting" className='h-7 pt-2.5 pr-3' />
            </div>
        </div>
      </div>
    )
}