

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}




replaceAllButton.addEventListener('click', function() {
   let searchString = findInput.value;
   let replaceString = replaceInput.value;
    let rowIndex = 0;
  while (rowIndex < rowElements.length) {
      rowIndex++;
      const currentRowElement = rowElements[rowIndex];

    let cellElements = getCellElements(currentRowElement);
    let cellIndex = 0;
  while (cellIndex < cellElements.length) {
      cellIndex++;
      const currentCellElement = cellElements[cellIndex];

      let currentCellString = currentRowElement.innerHTML

    //   console.log(currentCellString.includes(searchString));
   while (currentCellString.includes(searchString)) {
         currentCellString = currentCellString.replace(searchString, replaceString)
            //    console.log(currentCellString)
            
         }
           currentCellElement.innerHTML =  currentCellString
    
  }
      
  }    

})
   


 
