document.addEventListener("DOMContentLoaded", function() {
  // Get references to the HTML elements
  const form = document.querySelector('form');
  const overviewDiv = document.querySelector('#overview');
  const links = document.querySelectorAll('.move-link');

  // Define an object with the Enneagram number descriptions
  const descriptions = {
    '1': 'Type 1: The Perfectionist - principled, responsible, self-controlled',
    '2': 'Type 2: The Helper - caring, generous, people-pleasing',
    '3': 'Type 3: The Achiever - adaptable, ambitious, image-conscious',
    '4': 'Type 4: The Individualist - expressive, dramatic, self-absorbed',
    '5': 'Type 5: The Investigator - perceptive, innovative, isolated',
    '6': 'Type 6: The Loyalist - engaging, responsible, anxious',
    '7': 'Type 7: The Enthusiast - spontaneous, versatile, scattered',
    '8': 'Type 8: The Challenger - self-confident, decisive, confrontational',
    '9': 'Type 9: The Peacemaker - receptive, reassuring, complacent'
  };

  // Define an object with the Enneagram numbers that each type moves to in health
  const healthMoves = {
    '1': ['7', '4'],
    '2': ['4', '8'],
    '3': ['6', '9'],
    '4': ['1', '2'],
    '5': ['8', '7'],
    '6': ['9', '3'],
    '7': ['5', '1'],
    '8': ['2', '5'],
    '9': ['3', '6']
  };

  // Define an object with the Enneagram numbers that each type moves to in stress
  const stressMoves = {
    '1': ['4', '7'],
    '2': ['8', '5'],
    '3': ['9', '6'],
    '4': ['2', '1'],
    '5': ['7', '8'],
    '6': ['3', '9'],
    '7': ['1', '5'],
    '8': ['5', '2'],
    '9': ['6', '3']
  };

  // Define a function to update the overview div with the selected Enneagram number
  function updateOverview(e) {
    e.preventDefault();
    const selectedNumber = form.number.value;
    const description = descriptions[selectedNumber];
    overviewDiv.textContent = description;
  }

  // Define a function to handle moving to another Enneagram number
  function moveToNumber(e) {
    e.preventDefault();
    const anchor = e.target.getAttribute('href');
    const target = document.querySelector(anchor);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // Add event listeners to the form and move links
  form.addEventListener('submit', updateOverview);
  links.forEach(link => link.addEventListener('click', moveToNumber));

});

