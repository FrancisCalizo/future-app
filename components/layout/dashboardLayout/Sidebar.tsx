import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { darken, lighten } from 'polished';
import Image from 'next/image';

import { _AppContext } from 'components/AppContext';
import { getPathName } from 'components/utils';
import SearchFilter from 'components/SearchFilter';
import FutureLogo from 'public/images/future-logo.png';

export default function Sidebar() {
  const {
    exercises: { data: exercises },
    setSelectedExercise,
  } = useContext(_AppContext);

  const router = useRouter();

  const [currentRoute, setCurrentRoute] = useState<any>(null);
  const [filterSidebarLinks, setFilteredSidebarLinks] = useState(exercises || []);

  // Gather exercise information based on the route URL
  useEffect(() => {
    handleGetExerciseInformation(router.query.name as string);
    setCurrentRoute(getPathName(router.asPath, '/'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, router.query.name]);

  const handleGetExerciseInformation = (path: string) => {
    if (path) {
      const exercise = exercises.find((ex: any) => ex.id === path);

      setSelectedExercise(exercise);
    }
  };

  const handleChangeSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      const filtered = exercises.filter((ex: any) => ex.name.toLowerCase().includes(value.toLowerCase()));

      setFilteredSidebarLinks(filtered);
    } else {
      setFilteredSidebarLinks(exercises);
    }
  };

  return (
    <SidebarContainer>
      <div className="logo-container">
        <Image alt="Future" src={FutureLogo} layout="responsive" />
      </div>

      <h3 className="heading">Exercise List</h3>

      <div className="search-filter-container">
        <SearchFilter placeholder="Filter by exercise name" onChange={handleChangeSearchFilter} />
      </div>

      <SidebarLinks>
        {filterSidebarLinks?.map((link: any, key: number) => (
          <GLink key={key} href={`/${link.id}`}>
            <Li isCurrent={currentRoute === `${link.id}`}>
              <div style={{ textTransform: 'capitalize' }}>
                {`${link.name} ${link.side && `(${link.side.replace('_', ' ')})`}`}
              </div>
            </Li>
          </GLink>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
}

export const SidebarContainer = styled.div`
  background: ${(props) => lighten(0.075, props.theme.colors.primary)};
  color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 99;
  width: 280px;
  padding: 2rem 0;
  box-sizing: border-box;

  transition: all 300ms ease-in-out;

  .logo-container {
    width: 100%;
    padding: 0.5rem 1.5rem;
  }

  .heading {
    text-align: center;
    margin-top: 0;
  }

  .search-filter-container {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  overflow-y: auto;
`;

const Li = styled.li<{ isCurrent: boolean }>`
  font-size: 1rem;
  padding: 1rem 1.85rem;
  transition: all 0.1s ease-out;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isCurrent ? '#fff' : 'inherit')};
  background: ${(props) => (props.isCurrent ? props.theme.colors.secondary : 'transparent')};

  &:hover {
    background: ${(props) =>
      props.isCurrent ? darken(0.2, props.theme.colors.secondary) : darken(0.025, props.theme.colors.primary)};
    cursor: pointer;
    color: #fff;
  }

  & a {
    padding: 0.3rem;
    border-radius: 2px;
    background-position: right bottom;
    transition: all 0.1s ease-out;
  }
`;

export const GLink = styled(Link)`
  color: #000;
  border-bottom: 2px solid black;
  transition: all 300ms ease-in-out;
  text-transform: capitalize;
`;
