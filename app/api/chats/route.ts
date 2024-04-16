import { NextRequest } from 'next/server'

import { db } from '@/app/db';
import { chats } from '@/app/db/schemas/chats';

export const runtime = 'edge';;



export async function GET(request: NextRequest) {

  const rows = await db.select().from(chats).limit(10);


  return new Response(
    JSON.stringify({ data: rows || [] }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
