import axios from "axios";
import { IRoom, IUser, IChat } from "@typings/db";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

//room
export const fetchChatRoomList = () => {
  return axiosInstance.get(`/api/rooms`);
};

export const makeChatRoom = (body: IRoom) => {
  return axiosInstance.post(`/api/rooms`, body);
};

export const fetchChatRoomDetail = (roomId: string) => {
  return axiosInstance.get(`/api/rooms/${roomId}`);
};

//chat

export const fetchChatMessageList = (roomId: string) => {
  return axiosInstance.get(`/api/rooms/${roomId}/chats`);
};

export const sendChatMessage = (body: IChat) => {
  return axiosInstance.post(`/api/rooms/${body.RoomId}/chats`, body);
};

//user

export const fetchUserList = () => {
  return axiosInstance.get("/api/users");
};

export const fetchMyProfile = () => {
  return axiosInstance.get("/api/users/me");
};

interface IBody {
  email: string;
  // password: string;
}

export const login = (body: IBody) => {
  return axiosInstance.post("/api/users/login", body);
};

export const logout = () => {
  return axiosInstance.post("/api/users/logout");
};
