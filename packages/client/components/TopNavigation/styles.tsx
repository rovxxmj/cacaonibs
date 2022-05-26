import styled from "@emotion/styled";
export const Base = styled.ul<{ borderColor: string; bgColor: string }>`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  position: fixed;
  background-color: ${({ bgColor }) => bgColor};
  z-index: 1000;
`;

export const Container = styled.div`
  height: 100%;
  padding: 0 15px;
`;

export const CurrentTime = styled.div`
  text-align: center;
  padding: 3px 0;
`;

export const CurrentPage = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const SmallTitle = styled.h1`
  font-size: 17px;
  font-weight: 600;
`;

export const ActionItemContainer = styled.ul`
  display: flex;
  height: 100%;
`;

export const ActionItem = styled.span<{ textColor: string }>`
  width: 40px;
  margin-left: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${({ textColor }) => textColor};
`;
