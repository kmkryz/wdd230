
  document.addEventListener('DOMContentLoaded', function() {
    // References to the list, input, and button elements
    const list = document.querySelector('ul');
    const itemInput = document.getElementById('item');
    const addButton = document.querySelector('button');

    // Function to add a new item to the list
    function addItem() {
      // Store the current value of the input element in a variable
      const itemText = itemInput.value.trim();

      // Clear the input element
      itemInput.value = '';

      // Create a new list item (<li>), <span>, and <button>
      const li = document.createElement('li');
      const span = document.createElement('span');
      const deleteButton = document.createElement('button');

      // Set the text content of the span and the button
      span.textContent = itemText;
      deleteButton.textContent = 'Delete';

      // Append the span and the button as children of the list item
      li.appendChild(span);
      li.appendChild(deleteButton);

      // Append the list item as a child of the list
      list.appendChild(li);

      // Attach an event handler to the delete button
      deleteButton.addEventListener('click', function() {
        list.removeChild(li);
      });



      // Focus the input element ready for entering the next item
      itemInput.focus();
    }

    // Attach the addItem function to the click event of the button
    addButton.addEventListener('click', addItem);
  });

