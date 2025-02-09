import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')
  
  if (!slug) {
    return new Response('No slug in URL', { status: 401 })
  }

  // Enable preview mode by setting cookies
  return redirect(`/${slug}`, 307)
} 