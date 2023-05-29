
import { Link, NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { AiOutlineAreaChart, AiOutlineUserAdd } from "react-icons/ai";
import {AppSideBar} from './Layout.Style'

const Sidebar = () => {

    const {isCollapse} = useSelector((state:any)=>{
        return{
            isCollapse: state.app.isCollapse
        }
    })

    return(
        <AppSideBar 
            id="logo-sidebar" 
            aria-label="Sidebar"
            isCollapse={isCollapse}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive && 'bg-gray-200'}`
                            }
                        >
                            <AiOutlineAreaChart className='h-5 w-5'/>
                            <span className="ml-3">Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/chart-map'
                            className={({ isActive }) =>
                            `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive && 'bg-gray-200'}`
                        }
                        >
                            <AiOutlineUserAdd className='h-5 w-5'/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Chart & Maps</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </AppSideBar>
    )
}
export default Sidebar;