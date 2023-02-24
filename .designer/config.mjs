export default {
    key: 'vdsg-tests-vuetify-vite',
    label: 'vuetify tests vite',
    app: {
        tests: {
            uiSpecsPath: '.designer-tests/.spec',
        },
        pages: {
            pathPrefix: 'src/views/',
        },
        router: {
            entryPoint: 'src/plugins/index.js',
        },
    },
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8088,
    }
}