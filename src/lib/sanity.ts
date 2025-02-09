import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '../types/sanity'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-01',
  token: import.meta.env.SANITY_API_TOKEN,
  useCdn: true
})

// Image builder setup
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
} 