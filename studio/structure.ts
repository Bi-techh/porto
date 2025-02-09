import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(
          S.documentTypeList('post')
            .title('All Posts')
        ),
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('All Projects')
        )
    ])

export default defineConfig({
  plugins: [
    deskTool({
      structure
    })
  ]
}) 