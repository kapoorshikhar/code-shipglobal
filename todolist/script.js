document.addEventListener('DOMContentLoaded', () => {
    const lists = {
      backlog: document.getElementById('backlog-list'),
      todo: document.getElementById('todo-list'),
      ongoing: document.getElementById('ongoing-list'),
      done: document.getElementById('done-list')
    };
  
    function moveItem(event) {
      const button = event.target;
      const listItem = button.closest('.todo-item');
      const currentList = listItem.parentElement;
      let newList;
  
      if (button.classList.contains('right')) {
        if (currentList === lists.backlog) newList = lists.todo;
        else if (currentList === lists.todo) newList = lists.ongoing;
        else if (currentList === lists.ongoing) newList = lists.done;
      } else if (button.classList.contains('left')) {
        if (currentList === lists.todo) newList = lists.backlog;
        else if (currentList === lists.ongoing) newList = lists.todo;
        else if (currentList === lists.done) newList = lists.ongoing;
      }
  
      if (newList) {
        newList.appendChild(listItem);
        updateButtonStates(listItem, newList);
      }
    }
  
    function updateButtonStates(listItem, newList) {
      const leftButton = listItem.querySelector('.button.left');
      const rightButton = listItem.querySelector('.button.right');
  
      if (newList === lists.backlog) {
        leftButton.disabled = true;
        rightButton.disabled = false;
      } else if (newList === lists.todo) {
        leftButton.disabled = false;
        rightButton.disabled = false;
      } else if (newList === lists.ongoing) {
        leftButton.disabled = false;
        rightButton.disabled = false;
      } else if (newList === lists.done) {
        leftButton.disabled = false;
        rightButton.disabled = true;
      }
    }
  
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', moveItem);
    });
  });
  