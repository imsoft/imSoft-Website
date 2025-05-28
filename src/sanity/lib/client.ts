import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: false, // para obtener datos siempre frescos en SSR/ISR
  token: process.env.SANITY_API_READ_TOKEN, // asegúrate de tenerlo en Vercel
})
