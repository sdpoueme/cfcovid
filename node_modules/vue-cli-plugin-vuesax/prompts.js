module.exports = [
    {
        type: 'list',
        name: 'import',
        message: 'How do you want to import Vuesax?',
        choices: [
            { name: 'Fully import', value: 'full' },
            { name: 'Import on demand', value: 'partial' }
        ],
        default: 'full'
    },
    {
        type: 'confirm',
        name: 'includeIcons',
        message: 'Do you wish to include Material Design Icons?',
        default: true
    }
]
