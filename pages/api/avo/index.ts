// import { IncomingMessage, ServerResponse } from "http";
import { NextApiResponse, NextApiRequest } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  response.status(200).json(allEntries)
}

export default allAvos
