/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import designer from 'vdsg-slave'
import designerConfig from '../../.designer/config.mjs'
import designerMetadata from '../../.designer/metadata.mjs'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(designer, {
      config: designerConfig,
      metadata: designerMetadata,
    })
}
