import React from "react";

import styled from "@emotion/styled";
import TopNavigation from "@components/TopNavigation";
import BottomNavigation from "@components/BottomNavigation";

export const Base = styled.div``;

export const Container = styled.div``;

export const Summary = styled.div``;

const Friends = () => {
  return (
    <Base>
      <Container>
        <TopNavigation title={"친구"} />
        {/*<Profile />*/}
        <Summary>친구: 0</Summary>
        {/*<FriendList />*/}

        <BottomNavigation page={"friends"} />
      </Container>
    </Base>
  );
};

export default Friends;
