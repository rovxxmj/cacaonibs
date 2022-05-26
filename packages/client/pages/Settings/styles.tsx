import styled from "@emotion/styled";

export const Base = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
  transform: translateY(80px);
`;

export const Groups = styled.div``;

export const Group = styled.div<{ borderColor: string }>`
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  padding: 20px 40px;
`;

export const Part = styled.div<{ borderColor: string; hide: boolean }>`
  font-size: 17px;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: ${({ borderColor, hide }) =>
    hide ? "none" : `1px solid ${borderColor}`};
`;
