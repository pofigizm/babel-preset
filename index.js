const plugins = [
  require.resolve('babel-plugin-universal-import'),

  require.resolve('babel-plugin-syntax-object-rest-spread'),
  require.resolve('babel-plugin-syntax-export-extensions'),
  require.resolve('babel-plugin-syntax-class-properties'),

  [require.resolve('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true }],
  require.resolve('babel-plugin-transform-export-extensions'),
  require.resolve('babel-plugin-transform-class-properties'),

  [require.resolve('babel-plugin-transform-react-jsx'), { useBuiltIns: true }],
]

const env = process.env.BABEL_ENV || process.env.NODE_ENV

if (!env) throw new Error('Need to setup BABEL_ENV or NODE_ENV')

if (env === 'development' || env === 'test') {
  plugins.push.apply(plugins, [
    require.resolve('babel-plugin-transform-react-jsx-source'),
    require.resolve('babel-plugin-transform-react-jsx-self'),
  ])
}

if (env === 'test' || env === 'server') {
  module.exports = {
    presets: [
      [
        require('babel-preset-env').default,
        {
          targets: { node: 'current' },
        },
      ],
      require.resolve('babel-preset-react'),
    ],
    plugins: plugins.concat([
      require.resolve('babel-plugin-dynamic-import-node'),
    ]),
  }
} else {
  module.exports = {
    presets: [
      [
        require.resolve('babel-preset-env'),
        {
          targets: { chrome: 60 },
          useBuiltIns: false,
          modules: false,
          loose: true,
        },
      ],
      require.resolve('babel-preset-react'),
    ],
    plugins: plugins.concat([
      require.resolve('babel-plugin-syntax-dynamic-import'),
    ]),
  }
}
