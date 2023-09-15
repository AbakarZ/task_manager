const dragDropBlocks = document.querySelectorAll('.drag-drop__list');
const dragDropElements = document.querySelectorAll('.drag-drop__item');
let dropElement = null;

dragDropBlocks.forEach(block => {

  block.addEventListener('dragover', dragOver);

  block.addEventListener('drop', drop);

  function dragOver(event) {
    event.preventDefault()
  }

  function drop(event) {
    this.append(dropElement);
  }
})

dragDropElements.forEach(element => {
  element.addEventListener('dragstart', dragStart);

  element.addEventListener('dragend', dragEnd);

  function dragStart() {
    dropElement = this;
    setTimeout(() => {
      this.classList.add('hide');
    }, 0); 
  }

  function dragEnd() {
    this.classList.remove('hide');
    dropElement = null;
  }
});




