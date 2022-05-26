import React from "react";

import Navigation from "@components/Navigation";
import { useTheme } from "@emotion/react";
import { Base, Group, Groups, Main, Part } from "@pages/Settings/styles";

const Settings = () => {
  const theme = useTheme();
  const parts = [
    "공지사항",
    "실험실",
    "버전정보",
    "개인/보안",
    "알림",
    "친구",
    "채팅",
    "멀티프로필",
    "화면",
    "테마",
    "통화",
    "화상",
    "기타",
    "카톡 안녕가이드",
    "고객센터/도움말",
  ];
  return (
    <>
      <Base>
        <Navigation title={"설정"} />
        <Main>
          <Groups>
            <Group borderColor={theme.colors.gray[100]}>
              {parts.slice(0, 3).map((part, idx) => (
                <Part
                  key={idx}
                  borderColor={theme.colors.gray[100]}
                  hide={idx === parts.slice(0, 3).length - 1}
                >
                  {part}
                </Part>
              ))}
            </Group>
            <Group borderColor={theme.colors.gray[100]}>
              {parts.slice(3, 13).map((part, idx) => (
                <Part
                  key={idx}
                  borderColor={theme.colors.gray[100]}
                  hide={idx === parts.slice(3, 13).length - 1}
                >
                  {part}
                </Part>
              ))}
            </Group>
            <Group borderColor={theme.colors.gray[100]}>
              {parts.slice(13).map((part, idx) => (
                <Part
                  key={idx}
                  borderColor={theme.colors.gray[100]}
                  hide={idx === parts.slice(13).length - 1}
                >
                  {part}
                </Part>
              ))}
            </Group>
          </Groups>
        </Main>
      </Base>
    </>
  );
};

export default Settings;
