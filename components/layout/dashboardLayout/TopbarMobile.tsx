import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import SidebarMobile from 'components/layout/dashboardLayout/SidebarMobile';
import Hamburger from 'public/images/hamburger.png';

export default function Topbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <TopbarContainer>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="burger-container">
            <Image alt="Future" src={Hamburger} layout="fixed" width={25} height={25} />
          </button>
        </div>

        <SidebarMobile setIsBurgerOpen={setIsBurgerOpen} isBurgerOpen={isBurgerOpen} />
      </div>
    </TopbarContainer>
  );
}

const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  background: ${(props) => props.theme.colors.primary};

  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;

  .burger-container {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }

  @media (max-width: 560px) {
    padding: 0.75rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
