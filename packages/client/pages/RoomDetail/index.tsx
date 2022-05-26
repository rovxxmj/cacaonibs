import React from "react";

import styled from "@emotion/styled";
import TopNavigation from "@components/TopNavigation";
import BottomNavigation from "@components/BottomNavigation";

const RoomDetail = () => {
  return (
    <>
      <TopNavigation title={"채팅"} />
      <BottomNavigation page={"chats"} />
    </>
  );
};

export default RoomDetail;
