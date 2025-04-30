import MenuContent from "./content-menu";
import TabMenu from "./tab-menu";


const Menu = () => {
    return ( 
        <div id="menu" className="flex flex-col gap-4">
            <h1 className="font-black text-2xl text-center my-5">منوی اصلی</h1>
            <TabMenu />
            <MenuContent />
        </div>

     );
}
 
export default Menu;