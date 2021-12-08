import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { Post } from '../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post" key={post.id}>
    <h2 className="postTitle">
      {`Post ${post.title}`}
    </h2>
    <div className="postMain">
      {post.body}
    </div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </div>
);
