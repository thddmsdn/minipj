module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Board'
			return args
			
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}			
		})
	},
	devServer: {
		overlay: false,
	},
}
