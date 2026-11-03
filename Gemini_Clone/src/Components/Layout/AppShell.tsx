import Header from './Header';
import Sideabar from './Sidebar';
import BackGround from './BackGround';
export default function AppShell(){
    return(
        <div>
            <BackGround></BackGround>
             <Header></Header>
             <Sideabar></Sideabar>
        </div>
    )
}
