/* <div class="row">
          <div class="operation">5 x 1 =</div>
          <div class="result">5</div>
        </div>
        <div class="row">
          <div class="operation">5 x 2 =</div>
          <div class="result">10</div>
        </div>
        <div class="row">
          <div class="operation">5 x 3 =</div>
          <div class="result">15</div>
        </div>

*/

//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector(".multiplication-operations")

const title = document.querySelector("#multiplication-title span");

//Funções

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "" //Limpa a tabela antes de criar uma nova operação

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i

    const template = `
    <div class="row">
      <div class="operation">${number} x ${i} = </div>
      <div class="result">${result}</div>
    </div >`;


    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row)

  }
  title.innerText = `${number}`
}

//Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);

})