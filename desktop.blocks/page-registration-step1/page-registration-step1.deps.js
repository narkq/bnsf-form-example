({
    mustDeps: ['i-page'],
	shouldDeps: [
		'row',
		'col',
		{
			block: 'form',
			mods: {
				theme: 'islands',
				'has-validate': true,
				ajax: true
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
