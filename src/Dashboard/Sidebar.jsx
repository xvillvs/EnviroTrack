import React from 'react'
import {BsGrid1X2Fill,BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
import { IoLogOut } from "react-icons/io5";
import './Dashboard.css';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
             <div className='sidebar-brand'> 
                       ADMIN
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/admin/transactionhistory">
                    <BsMenuButtonWideFill className='icon'/> Transaction History
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoLogOut className='icon'/> Log out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar