export type EditUserModalProps = {
  name: string;
  email: string;
  password: string;
  image: string;
  role: "USER" | "ADMIN";
};

export type RemoveUserProps = {
  userId: string;
  userName: string;
};

export type UserRowProps = {
  index: number;
  item: any;
};
