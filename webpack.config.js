module.exports = {
    //... other settings
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
        // other rules
      ],
    },
  };
  