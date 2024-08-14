let feedbackData = {};

//Created a function to make a lighting calculator
function calculate() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const lightingType = document.getElementById('lighting').value;

  if (isNaN(length) || isNaN(width) || isNaN(height)) {
    alert('Please enter valid dimensions');
    return;
  }
  const area = length * width;
  let numberOfLights = 0;

  switch (lightingType) {
    case 'decorative':
      numberOfLights = Math.ceil(area / 50); 
      break;
    case 'dim':
      numberOfLights = Math.ceil(area / 100); 
      break;
    case 'ambient':
      numberOfLights = Math.ceil(area / 75); 
      break;
    case 'accent':
      numberOfLights = Math.ceil(area / 30); 
      break;
    default:
      break;
  }

  // We have budget of $50 per light
  const totalCost = numberOfLights * 50; 
  const result = `Number of Lights Needed: ${numberOfLights}<br>Total Cost: $${totalCost}`;
  document.getElementById('result').innerHTML = result;
}

//Create a function for a feedback form
function submitFeedback() {
  const feedbackText = document.getElementById('feedback-text').value;
  const rating = document.getElementById('rating').value;

  //I'm not sure about this.
  const lightingType = document.getElementById('lighting').value;
  if (!feedbackData.hasOwnProperty(lightingType)) {
    feedbackData[lightingType] = [];
  }
  feedbackData[lightingType].push({ feedback: feedbackText, rating: rating });
  displayFeedback();
}
function displayFeedback() {
  const lightingType = document.getElementById('lighting').value;
  const feedbackList = document.getElementById('feedback-items');
  feedbackList.innerHTML = '';

  if (feedbackData.hasOwnProperty(lightingType)) {
    feedbackData[lightingType].forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Feedback ${index + 1}:</strong> ${item.feedback} (Rating: ${item.rating})`;
      feedbackList.appendChild(li);
    });
  }
}
