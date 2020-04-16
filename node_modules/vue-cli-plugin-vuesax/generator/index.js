const fs = require('fs')

module.exports = (api, opts, rootOpts) => {

    const dependencies = {
        vuesax: '^3.4.7'
    }
    if (opts.includeIcons) {
        dependencies['material-icons'] = '^0.2.3'
    }
    
    api.extendPackage({
        dependencies
    })

    const tsPath = api.resolve('src/main.ts')
    const mainPath = fs.existsSync(tsPath) ? 'src/main.ts' : 'src/main.js'
    api.injectImports(mainPath, 'import \'./plugins/vuesax.js\'')

    api.render({
        './src/plugins/vuesax.js': './template.js'
    })

}
