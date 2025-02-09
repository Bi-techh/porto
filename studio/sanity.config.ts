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
      previewUrl: {
        origin: 'http://localhost:4321',
        draftMode: {
          enable: '/api/preview',
          disable: '/api/disable-preview'
        }
      },
      resolve: {
        mainDocuments: (documents) => documents.filter(doc => doc._type === 'post' || doc._type === 'project')
      },
      preview: {
        gemini: {
          enabled: true,
          framerate: 30
        }
      }
    })
  ],

  schema: {
    types: schemaTypes
  }
})