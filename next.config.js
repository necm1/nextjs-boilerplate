const path = require('path');

module.exports = {
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  resolve: {
    alias: {
      '@ares/model': path.join(__dirname, '_model'),
      '@ares/service': path.join(__dirname, '_service'),
      '@ares/inject': path.join(__dirname, 'decorators/inject.ts'),
      '@ares/style': path.join(__dirname, 'styles'),
    },
  },
};
