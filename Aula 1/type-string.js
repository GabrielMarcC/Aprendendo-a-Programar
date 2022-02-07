// strings = podem ser representadas entre "" e ''. ex: const  texto = "ola"

const texto1 = "Olá, Mundo";
const texto2 = 'Olá, Mundo';
const senha  = "minhasenha223@";
const stringDeNumeros = "23156"

const citacao = "Meu nome é ";
const meuNome = "Gabriel"
console.log(citacao);

// concatenção (+)
console.log(citacao + meuNome);

// Unicode (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre)
//O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres