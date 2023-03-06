const input = document.querySelector('input');
input.addEventListener('input', onInput);

const EMAIL_REGEXP =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
	if (isEmailValid(input.value)) {
		input.style.backgroundColor = 'green';
	} else {
		input.style.backgroundColor = 'red';
	}
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
	return EMAIL_REGEXP.test(value);
}
