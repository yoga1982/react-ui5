var path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    html: {
      template: 'template/index.html'
    }
  }
}
