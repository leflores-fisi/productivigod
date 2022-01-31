import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useLocation } from 'wouter';
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function Navbar({tabs}) {

  const [path, setPath] = useLocation('/home');

  useEffect(() => {
    Array.from(document.querySelector('.side-bar__nav-list').children).forEach((item) => {
      item.classList.remove('selected');
      if (item.classList.contains(path)) item.classList.add('selected')
    });
  }, [path]);

  return (
    <ul className='side-bar__nav-list'>
      <NavItem path='/tasks' icon='☕' name='Tasks'/>
      <NavItem path='/notebook' icon='📖' name='Notebook'/>
      <NavItem path='/manager' icon='🧭' name='Manager'/>
    </ul>
  );
}
export default Navbar;