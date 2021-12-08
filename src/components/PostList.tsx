import { PostInfo } from './PostInfo';
import { Post } from '../types/Post';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </>
);