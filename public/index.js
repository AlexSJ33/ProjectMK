

const version_mk = document.getElementById('version_mk')
const personagem = document.getElementById('personagem')
const selectVersion = document.getElementById("version_mk")
const selectPersonagem = document.getElementById("personagem")

const url = '../teste.json'

async function getMKombatTitles() {
  const response = await fetch(url)
  const mktitles = await response.json()

  mktitles.forEach(element => {
    option = new Option(element.name, element.id)
    selectVersion.options[selectVersion.options.length] = option  
    
  });
  version_mk.addEventListener('change', function(){
    console.log(document.getElementById('version_mk').value)

  })
}

getMKombatTitles()