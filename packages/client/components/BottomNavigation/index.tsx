import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import {
  IoPersonOutline,
  IoPerson,
  IoChatbubbleOutline,
  IoChatbubble,
  IoBagOutline,
  IoBag,
  IoEllipsisHorizontalOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import { useTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "@apis/apis";

interface IProps {
  page: string;
}

const Base = styled.nav<{ bgColor: string; borderColor: string }>`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ bgColor }) => bgColor};
  border-top: ${({ borderColor }) => borderColor};
`;

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const NavItem = styled.li`
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

const BottomNavigation: FC<IProps> = ({ page }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Base bgColor={theme.colors.gray[50]} borderColor={theme.colors.gray[200]}>
      <NavList>
        <NavItem>
          <Link to={"/friends"}>
            {page === "friends" ? <IoPerson /> : <IoPersonOutline />}
          </Link>
        </NavItem>

        <NavItem>
          <Link to={"/chats"}>
            {page === "chats" ? <IoChatbubble /> : <IoChatbubbleOutline />}
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/shoppings"}>
            {page === "shoppings" ? <IoBag /> : <IoBagOutline />}
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/more"}>
            {page === "more" ? (
              <IoEllipsisHorizontal />
            ) : (
              <IoEllipsisHorizontalOutline />
            )}
          </Link>
        </NavItem>
      </NavList>
    </Base>
  );
};
export default BottomNavigation;
