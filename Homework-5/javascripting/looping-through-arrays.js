var pets = ['cat', 'dog', 'rat'],
	length = pets.length,
	i;
for (i=0; i<length; i++) {
	pets[i]=pets[i]+'s';
}
console.log(pets);