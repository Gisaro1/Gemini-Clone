import Header from './Header';
import Sideabar from './Sidebar';
import MainContent from './MainContent';
export default function AppShell(){
    return(
        <div className='bg-[#0f1011] h-screen  relative'>
            <div className='bg-[#17275f] absolute h-[80%] w-[50%] left-[25%] top-[10.5%] border rounded-full blur-[100px]'>
            </div>
            <Header></Header>
            <Sideabar></Sideabar>
            <MainContent></MainContent>
        </div>
    )
}
