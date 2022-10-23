const askLenguage = prompt("What language do you want to translate 'Hello World'?")
let lenguage = ''

switch (askLenguage.toLowerCase()) {
    case 'spanish':
        lenguage = 'Hola, mundo!.'
        break
    case 'french':
        lenguage = 'Bonjour tout le monde.'
        break
    case 'italian':
        lenguage = 'Ciao mondo!'
        break
    case 'japanese':
        lenguage = "「こんにちは世界"
        break
    case 'chinese':
        lenguage = '你好世界'
        break

    default:
        lenguage = "We still don't have the ability to translate this language but we are learning it, sorry!"

}

alert(`${lenguage}`)