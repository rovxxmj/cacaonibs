import React from "react";

import styled from "@emotion/styled";
import TopNavigation from "@components/TopNavigation";
import BottomNavigation from "@components/BottomNavigation";

const SeeMore = () => {
  return (
    <>
      <TopNavigation title={"더보기"} />
      <BottomNavigation page={"more"} />
    </>
  );
};

export default SeeMore;
