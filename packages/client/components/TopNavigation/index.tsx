import React, { FC, useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import {
  IoSearchOutline,
  IoMusicalNotesOutline,
  IoChatbubbleEllipsesOutline,
  IoScanOutline,
} from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsGear } from "react-icons/bs";

import {
  ActionItem,
  ActionItemContainer,
  Base,
  Container,
  CurrentPage,
  CurrentTime,
  Title,
} from "@components/TopNavigation/styles";

interface IProps {
  title: string;
}

const TopNavigation: FC<IProps> = ({ title }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickSettings = useCallback(() => {
    localStorage.setItem("prev-page", title);
    return navigate("/settings");
  }, []);

  return (
    <Base borderColor={theme.colors.gray[200]} bgColor={theme.colors.bgColor}>
      <Container>
        <CurrentTime>12:00</CurrentTime>
        <CurrentPage>
          <Title>{title}</Title>
          <ActionItemContainer>
            <ActionItem textColor={theme.colors.textColor}>
              <IoSearchOutline />
            </ActionItem>
            <ActionItem textColor={theme.colors.textColor}>
              {title === "친구" && <AiOutlineUserAdd />}
              {title === "채팅" && <IoChatbubbleEllipsesOutline />}
              {["쇼핑", "더보기"].includes(title) && <IoScanOutline />}
            </ActionItem>
            <ActionItem textColor={theme.colors.textColor}>
              <IoMusicalNotesOutline />
            </ActionItem>
            <ActionItem
              textColor={theme.colors.textColor}
              onClick={onClickSettings}
            >
              <BsGear />
            </ActionItem>
          </ActionItemContainer>
        </CurrentPage>
      </Container>
    </Base>
  );
};

export default TopNavigation;
