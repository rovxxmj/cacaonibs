import React from "react";

import styled from "@emotion/styled";
import TopNavigation from "@components/TopNavigation";
import BottomNavigation from "@components/BottomNavigation";

const Shoppings = () => {
  return (
    <>
      <TopNavigation title={"쇼핑"} />
      <BottomNavigation page={"shoppings"} />
    </>
  );
};

export default Shoppings;
