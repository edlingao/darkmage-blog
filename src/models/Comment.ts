import { BaseModel } from "./BaseModel";

type CommentsModelProperties = {
  id: number;
  content: string;
  articleId: number;
  userId: number;
};

class Comments extends BaseModel<CommentsModelProperties> {
  constructor() {
    super("Comments");
  }
}

const CommentsModel = new Comments();

export default CommentsModel;
