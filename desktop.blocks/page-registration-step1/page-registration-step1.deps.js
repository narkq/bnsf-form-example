({
    mustDeps: ['i-page'],
	shouldDeps: [
		{
			block: 'row',
			mods: {
				fullheight: true
			}
		},
		{
			block: 'col',
		},
		{
			block: 'form',
			mods: {
				theme: 'islands',
				centered: true,
				'has-validate': true
			}
		},
		{
			block: 'form-field',
			mods: {
				theme: 'islands',
				'has-validate': true,
				required: true
			}
		},
		{
			block: 'input',
			mods: {
				theme: 'islands'
			}
		},
		{
			block: 'label',
			mods: {
				theme: 'islands'
			}
		},
		{
			block: 'message',
			mods: {
				theme: 'islands'
			}
		},
		{
			block: 'button',
			mods: {
				theme: 'islands'
			}
		},
		{
			block: 'validation',
			mods: {
				required: true,
				email: true,
			}
		},
		'registration-step1-header'
	]
})
