import React from "react";
import { Icon } from '@iconify/react';
import {Navlink,NavOption,Navmenu,Nav,WebsitePage,Navcontainer,Logoname,PetPaws,Menu} from './Navbar'

const NavBarContainer = () => {
  return <WebsitePage>
     <Navcontainer>
          <Nav to='home'><Logoname>PetSh<PetPaws><Icon icon="material-symbols:pets" /></PetPaws>p</Logoname></Nav>
          <Navmenu>
              <NavOption className="active">
                  <Navlink className="active" to='about'>About</Navlink>
              </NavOption>
              <NavOption>
                  <Navlink to='category'>Category</Navlink>
              </NavOption>
              <NavOption>
                  <Navlink to='location'>Location</Navlink>
              </NavOption>
          </Navmenu>
          <Menu><Icon icon="entypo:menu"/></Menu>
      </Navcontainer>
  </WebsitePage>;
};

export default NavBarContainer;
