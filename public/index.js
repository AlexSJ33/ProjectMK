

const version_mk = document.getElementById('version_mk')
const personagem = document.getElementById('personagem')
const selectVersion = document.getElementById("version_mk")
const selectPersonagem = document.getElementById("personagem")

const url = 'http://botechia.duckdns.org:7780/testemk/mkombat_titulo.json'


async function getMKombatTitles() {
  const response = await fetch(url)
  const mktitles = response.json()
  console.log(mktitles)
}
getMKombatTitles()



//   const mkombat_titulo = await response.json()

//   mkombat_titulo.forEach(function (versao) {
//     let versionName = versao.name;
//     let versionPersonagem = versao.personagem;
//     selectVersion.appendChild(new Option(versionName))
//     })
  
// }
// version_mk.addEventListener('change', function(){
//   console.log(version_mk.value)
//   console.log(document.getElementById('version_mk').value)
// })


// personagem.addEventListener('change', function(){
//   console.log(personagem.value)
// })
