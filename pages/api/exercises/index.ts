import type { NextApiRequest, NextApiResponse } from 'next';
import exercises from 'data/exercises.json';

//For the sake of time, an "any" type is used for the NextApiResponse generic
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).send(exercises);
}
