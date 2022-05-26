export interface IUser {
  id?: number;
  email: string;
  name?: string;
  username?: string;
  phone?: string;
  Rooms: IRoom[];
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IRoom {
  id: number;
  name: string;
  private: boolean;
}

export interface IChat {
  id: number;
  UserId: number;
  User: IUser;
  content: string;
  createdAt: Date;
  RoomId: number;
  Room: IRoom;
}

export interface IDM {
  id: number;
  SenderId: number;
  Sender: IUser;
  ReceiverId: number;
  Receiver: IUser;
  content: string;
  createdAt: Date;
}
