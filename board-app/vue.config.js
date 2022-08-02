module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.module.rules.delete('eslint');
		config.plugin('html').tap(args => {
			args[0].title = 'Board'
			return args
			
			
		})
	},
	devServer: {
		overlay: false,
	},
}
