const container = document.querySelector('#container');
const newGrid = document.querySelector('#newGrid');
const reset = document.querySelector('#reset');
let grids = 16
createGrid(grids)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid (grids){
    let grid = document.querySelector('#grid')
    container.removeChild(grid)
    let newGrid = document.createElement('div')
    newGrid.setAttribute('id', 'grid')
    newGrid.setAttribute('style', 'width: 580px; height: 580px; display: flex; flex-direction: column;')
    container.appendChild(newGrid)
    for(let i = 0; i < grids; i++){
        newRow = document.createElement("div");
        newRow.setAttribute('id', i);
        newRow.setAttribute('style', 'display: flex; flex: 1 1 auto;')
        newGrid.appendChild(newRow);
        for(let j = 0; j < grids; j++){
            newColumn = document.createElement("div")
            newColumn.setAttribute("id", j)
            newColumn.setAttribute('style', ' border-style: solid; border-width: .5px; flex: 1 1 auto')
            newColumn.addEventListener('mouseover', function(e) {
                e.target.style.background = getRandomColor();
            })
            newRow.appendChild(newColumn);  
        }
    }
}

function resetGrid(){
    createGrid(grids)
}

newGrid.addEventListener('click', ()=>{
    grids = (prompt("select number of grids"))
    createGrid(grids)
})

reset.addEventListener('click', ()=>
    resetGrid())
