export type UseRemoveCommentProps = {
  userId: string;
  foodId: string;
  time: string;
};

export type UseConfirmCommentType = {
  userId: string;
  foodId: string;
  status: boolean;
  time: string;
};

export type CommentRowProps = {
  index: number;
  item: any;
};

export type ConfirmCommentProps = {
  userId: string;
  foodId: string;
  userName: string;
  status: boolean;
  time: string;
};

export type RemoveCommentProps = {
  userId: string;
  foodId: string;
  userName: string;
  time: string;
};
