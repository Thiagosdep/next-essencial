import { NextApiRequest, NextApiResponse } from 'next';
import { postsContent } from './index';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { slug } = request.query;
  const post = postsContent.find(item => item.id === Number(slug));
  return response.json(post);
};
