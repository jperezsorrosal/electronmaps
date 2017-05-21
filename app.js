/**
 *
 * Created by jperezsl on 5/18/17.
 */

document.write('The current version of io.js ' + process.version)

const {fs} = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
//alert(contents)
