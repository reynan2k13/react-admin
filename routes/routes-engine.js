exports.index = (req, res) => {
	res.render('index', { title: 'React-play' });
}

exports.cms = (req, res) => {
	res.render('cms', { title: 'cms-builder' });
}
