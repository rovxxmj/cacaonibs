import React, { FC, useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackOutline, IoSearchOutline } from "react-icons/io5";

import {
  ActionItem,
  Base,
  Container,
  CurrentPage,
  CurrentTime,
  SmallTitle,
} from "@components/TopNavigation/styles";

interface IProps {
  title: string;
}

const Navigation: FC<IProps> = ({ title }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickNavigate = useCallback(() => {
    let route = "";
    const prev = localStorage.getItem("prev-page");
    if (prev === "친구") route = "/friends";
    if (prev === "채팅") route = "/chats";
    if (prev === "쇼핑") route = "/shoppings";
    if (prev === "더보기") route = "/more";
    return navigate(route);
  }, []);
  return (
    <Base borderColor={theme.colors.gray[200]} bgColor={theme.colors.bgColor}>
      <Container>
        <CurrentTime>12:00</CurrentTime>
        <CurrentPage>
          <ActionItem
            textColor={theme.colors.textColor}
            onClick={onClickNavigate}
          >
            <IoChevronBackOutline />
          </ActionItem>
          <SmallTitle>{title}</SmallTitle>
          <ActionItem textColor={theme.colors.textColor}>
            <IoSearchOutline />
          </ActionItem>
        </CurrentPage>
      </Container>
    </Base>
  );
};

export default Navigation;
