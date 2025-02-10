import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Admin',
  projectId: 'qpes3s7p',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: 'http://localhost:4321',
      resolve: {
        url: (doc) => {
          if (doc._type === 'post') return `/blog/${doc.slug?.current}`
          if (doc._type === 'project') return `/projects/${doc.slug?.current}`
          return '/'
        },
        mainDocuments: (docs) => docs.filter(doc => 
          ['post', 'project'].includes(doc._type)
        )
      }
    })
  ],

  schema: {
    types: schemaTypes
  }
}) 