import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    stack: 'Next.js App Router',
    renderer: 'server',
    runtime: 'Node.js',
    version: process.version,
    timestamp: new Date().toISOString(),
    endpoints: ['/api/info'],
  })
}
