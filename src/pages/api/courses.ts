import { NextApiRequest, NextApiResponse } from 'next';

export default (_request: NextApiRequest, response: NextApiResponse) => {
  const courses = [
    { id: 1, name: 'Next.js com Typescript' },
    { id: 2, name: 'React.js com Typescript' },
    { id: 3, name: 'Node.js com Typescript' },
    { id: 4, name: 'SASS' },
    { id: 5, name: 'Nest.js' },
  ];

  return response.json(courses);
};
