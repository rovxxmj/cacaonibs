import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { light, dark } from "@themes/themes";

import loadable from "@loadable/component";
import { Redirect } from "react-router";
const SignIn = loadable(() => import("@pages/SignIn"));
const SignUp = loadable(() => import("@pages/SignUp"));
const Friends = loadable(() => import("@pages/Friends"));
const RoomList = loadable(() => import("@pages/RoomList"));
const RoomDetail = loadable(() => import("@pages/RoomDetail"));
const SeeMore = loadable(() => import("@pages/SeeMore"));
const Profile = loadable(() => import("@pages/Profile"));
const Shoppings = loadable(() => import("@pages/Shoppings"));
const Settings = loadable(() => import("@pages/Settings"));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <Routes>
          <Route path={"/sign_in"} element={<SignIn />} />
          <Route path={"/sign_up"} element={<SignUp />} />
          <Route path={"/friends"} element={<Friends />} />
          <Route path={"/friends/:id"} element={<Profile />} />
          <Route path={"/chats"} element={<RoomList />} />
          <Route path={"/rooms/:id"} element={<RoomDetail />} />
          <Route path={"/shoppings"} element={<Shoppings />} />
          <Route path={"/more"} element={<SeeMore />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path="*" element={<Navigate to="/friends" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
