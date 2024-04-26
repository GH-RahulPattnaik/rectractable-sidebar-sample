'use client'
import SideBar, { SidebarLink } from '@/components/Sidebar';
import { LayoutDashboard, BarChart3, UserCircle, Settings, LifeBuoy } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { BsBoxes } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { IoChatbubble } from 'react-icons/io5';

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const statsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (statsDropdownRef.current && !statsDropdownRef.current.contains(event.target as Node)) {
        setIsStatsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [expanded] = useState<boolean>(true);

  return (
    <main className="App">
      <SideBar>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col'>

            {/* Dashboard */}
            <SidebarLink icon={<LayoutDashboard size={20} />} text={"Dashboard"} alert active={false} href={'/dashboard'} dropdown={false}  />

            {/* Statistic (Dropdown) */}
            <div ref={statsDropdownRef} className="font-medium dark:hover:bg-zinc-600 rounded-md hover:bg-blue-600">
              <div onClick={() => setIsStatsOpen(!isStatsOpen)} aria-haspopup="menu" aria-expanded={isStatsOpen}className="flex items-center">

                <SidebarLink icon={<BarChart3 size={20} />} text="Statistic" active={false} dropdown={true} />

                {/* Dropdown Icon */}
                {expanded || isOpen && <IoIosArrowDown size={18} />}
              </div>
              {isStatsOpen && (
                <ul className="flex flex-col pt-2"> 
                  <a href="#" className="w-full hover:bg-blue-500 p-3 pl-10">Option 1</a>
                  <a href="#" className="w-full hover:bg-blue-500 p-3 pl-10">Option 2</a>
                  <a href="#" className="w-full hover:bg-blue-500 p-3 pl-10">Option 3</a>
                </ul>
              )}
            </div>

            {/* Orders */}
            <SidebarLink icon={<BsBoxes size={20} />} text={"Orders"} active={false} href={'/orders'} dropdown={false}/>

            {/* User */}
            <SidebarLink icon={<UserCircle size={20} />} text={"Users"} active={false} href={'/users'} dropdown={false}/>

            {/* Dropdown */}
            <div ref={dropdownRef} className='font-medium dark:hover:bg-zinc-600 rounded-md hover:bg-blue-600'>
              <div onClick={() => setIsOpen(!isOpen)} aria-haspopup="menu" aria-expanded={isOpen} className='flex items-center'>

                <SidebarLink icon={<IoChatbubble size={18} />} text={'Dropdown'} active={false} dropdown={false} />

                {/* Dropdown Icon */}
                {expanded && isOpen && <IoIosArrowDown size={18} />}

              </div>
              {isOpen && (
                <ul className='flex flex-col'>
                  <a href="#" className='w-full hover:bg-blue-500 p-3 pl-10'>Option 1</a>
                  <a href="#" className='w-full hover:bg-blue-500 p-3 pl-10'>Option 2</a>
                  <a href="#" className='w-full hover:bg-blue-500 p-3 pl-10'>Option 3</a>
                </ul>
              )}
            </div>
            
          </div>

          <div className='flex flex-col'>
            <hr className="my-3" />

            {/* Settings */}
            <SidebarLink icon={<Settings size={20} />} text={"Settings"} active={false} href={'/settings'} dropdown={false} />

            {/* Help */}
            <SidebarLink icon={<LifeBuoy size={20} />} text={"Help"} active={false} href={'/help'} dropdown={false} />
          </div>
        </div>
      </SideBar>
    </main>
  );
}
