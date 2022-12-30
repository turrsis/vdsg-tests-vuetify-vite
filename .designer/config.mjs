export default {
    key: 'vdsg-tests-vuetify-vite',
    label: 'vuetify tests vite',
    tests: {
        uiSpecsPath: '.designer-tests/.spec',
    },
    routesEntryPoint: 'src/plugins/index.js',
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8088,
    }
}