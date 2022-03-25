/**
 * abc config
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode
 */
module.exports = ({ config, mode }) {
  console.log(mode);
  return config
}
