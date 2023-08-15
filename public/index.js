const version_mk = document.getElementById('version_mk')
const personagem = document.getElementById('personagem')

version_mk.addEventListener('change', function(){
    console.log(version_mk.value)
})

personagem.addEventListener('change', function(){
  console.log(personagem.value)
})