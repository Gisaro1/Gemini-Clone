import Header from './Header';
import Sideabar from './Sidebar';
export default function AppShell(){
    return(
        <div className='bg-[#0f1011] min-h-screen'>
            <Header></Header>
            <Sideabar></Sideabar>
        </div>
    )
}
