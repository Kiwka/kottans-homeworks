console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, ...args) {
	var result = template[0];
	for(var i = 0; i<args.length; i++) {
		result += change(args[i]) + template[i+1];
	};

	return result;
}

function change(string) {
	return string.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/'/g, '&#39;')
				.replace(/"/g, '&quot;');
}