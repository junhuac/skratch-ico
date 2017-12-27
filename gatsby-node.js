exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
     node: { fs: 'empty', child_process: 'empty' },
  })

  return config;
};
