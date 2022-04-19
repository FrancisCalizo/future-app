import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lighten } from 'polished';
import { slide as Menu } from 'react-burger-menu';

import { _AppContext } from 'components/AppContext';
import FutureLogo from 'public/images/future-logo.png';
import { getPathName, handleGetExerciseInformation } from 'components/utils';
import { theme } from 'components/theme';

interface MobileSidebarProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: any;
}

export default function MobileSidebar({ isBurgerOpen, setIsBurgerOpen }: MobileSidebarProps) {
  const {
    exercises: { data: exercises },
    setSelectedExercise,
  } = useContext(_AppContext);

  const router = useRouter();

  const [currentRoute, setCurrentRoute] = useState<any>(null);
  const [filterSidebarLinks, setFilteredSidebarLinks] = useState(exercises || []);

  useEffect(() => {
    handleGetExerciseInformation(router.query.name as string, exercises, setSelectedExercise);
    setCurrentRoute(getPathName(router.asPath, '/'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, router.query.name]);

  const menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      height: '50px',
      width: '50px',
      top: '5px',
      left: '2px',
    },
    bmOverlay: {
      top: '0',
      left: '0',
    },
    bmMenuWrap: {
      display: isBurgerOpen ? 'block' : 'none',
      width: '300px',
      top: '0',
      left: '0',
    },
    bmMorphShape: {
      fill: '#fff',
    },
    bmItemList: {
      display: 'flex',
      width: '300px',
      flexDirection: 'column',
      alignItems: 'center',
      background: theme.colors.primary,
      fontSize: '.8rem',
    },
    bmItem: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    bmCross: {
      background: '#fff',
    },
  };

  return (
    <Menu styles={menuStyles} onStateChange={(status: any) => setIsBurgerOpen(status.isOpen)} isOpen={isBurgerOpen}>
      <LogoContainer>
        <Image alt="Future" src={FutureLogo} layout="responsive" />
      </LogoContainer>

      {filterSidebarLinks.map((link: any, key: number) => (
        <BurgerContainer key={key} isCurrent={currentRoute === `${link.id}`} onClick={() => setIsBurgerOpen(false)}>
          <BurgerLink className="menu-item" href={`/${link.id}`}>
            {`${link.name} ${link.side && `(${link.side.replace('_', ' ')})`}`}
          </BurgerLink>
        </BurgerContainer>
      ))}
    </Menu>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  padding-top: 3rem;
`;

const BurgerLink = styled(Link)<{ className: string; href: string }>``;

const BurgerContainer = styled.div<{ isCurrent: boolean }>`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => (props.isCurrent ? '#fff !important' : 'inherit !important')};

  &:hover {
    background: ${(props) => lighten(0.075, props.theme.colors.primary)} !important;
    color: #fff !important;
  }

  & > a {
    display: block !important;
    padding: 1rem 0 !important;
  }
`;
