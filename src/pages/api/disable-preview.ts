import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ redirect }) => {
  // Disable preview mode by clearing cookies
  return redirect('/', 307)
} 