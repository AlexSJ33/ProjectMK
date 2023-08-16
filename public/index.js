

const version_mk = document.getElementById('version_mk')
const personagem = document.getElementById('personagem')
const selectVersion = document.getElementById("version_mk")
const selectPersonagem = document.getElementById("personagem")


async function fetchDataBase() {
  const response = await fetch('http://localhost:3000/versao')
  const info = await response.json()
  //const versao = info[1]["name"]
  //console.log(info)
  //console.log(versao)
  info.forEach(function (versao) {
    selectVersion.appendChild(new Option(versao['name']))
    
  });
  
  
}
  
fetchDataBase()




version_mk.addEventListener('change', function(){
    console.log(version_mk.value)
})

personagem.addEventListener('change', function(){
  console.log(personagem.value)
})