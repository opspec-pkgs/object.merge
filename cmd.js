const fs = require('fs')
const _default = require('/default.json')
const override = require('/override.json')

fs.writeFileSync(
    '/result',
    JSON.stringify({
        ..._default,
        ...override,
    })
)