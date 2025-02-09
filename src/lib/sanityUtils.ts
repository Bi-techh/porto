import { client } from './sanity'

export async function getLatestContent(query: string) {
  return client.fetch(query, {}, {
    cache: 'no-store',
    next: { revalidate: 0 }
  })
}

export function subscribeToUpdates(query: string, params: any, callback: (update: any) => void) {
  return client.listen(query, params)
    .subscribe(update => {
      callback(update)
    })
} 