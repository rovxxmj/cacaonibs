## REST API

### 채팅

#### GET /rooms
- room list 정보

#### POST /rooms
- body: {name: string}

#### GET /rooms/:roomId
- roomId 정보

#### GET /rooms/:roomId/chats

#### POST /rooms/:roomId/chats
- body: {content: IChat}

#### POST /rooms/:roomId/edit

#### GET /users/me
- 로그인 유저 정본

#### GET /users/:userId
- userId 정보

#### POST /users/login
- 로그인 

#### POST /users/logout
- 로그아웃



