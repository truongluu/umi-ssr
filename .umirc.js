const DocumentTitle = require('react-document-title');

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
      },
      title: {
        defaultTitle: 'my app',
      },
    },
  ],
];

export default {
  ssr: true,
  hash: process.env.NODE_ENV === 'production',
  publicPath: '/dist/',
  plugins,
  chainWebpack(config, { webpack }) {
    if (process.env.NODE_ENV === 'development') {
      config.output.publicPath('http://localhost:8000/');
    }
  },
};
