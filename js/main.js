(function(){

	function init() {
		const $input = document.querySelector('[data-js="input"]')
		$input.addEventListener('input', handleInput, false)
	}

	function handleInput (e) {
	  e.target.value = phoneMask(e.target.value)
	}

	function phoneMask (phone) {
	  return phone.replace(/\D/g, '')
	    .replace(/^(\d)/, '($1')
	    .replace(/^(\(\d{2})(\d)/, '$1) $2')
	    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
	    .replace(/(-\d{5})\d+?$/, '$1');
	}

	function menu() {
		let button = document.querySelector('.js-toggle');
		let nav = document.querySelector('.js-menu');

		function toggleClass(element, className){
		    if (!element || !className){
		        return;
		    }
		    
		    var classString = element.className, nameIndex = classString.indexOf(className);
		    if (nameIndex == -1) {
		        classString += ' ' + className;
		    }
		    else {
		        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		    }
		    element.className = classString;
		}

		button.onclick = function() {
		    toggleClass(nav, 'js-show');
		    toggleClass(button, 'js-close');
		};
	}

	init();
	menu();

}());