// Create a new div element with the specified ID
const messageDiv = document.createElement('div');
messageDiv.id = 'tusk-privacy-installed';

// Style the div (optional, remove if no styling is needed)
messageDiv.style.position = 'fixed';
messageDiv.style.bottom = '0';
// messageDiv.style.width = '100%';
messageDiv.style.backgroundColor = '#cdced0';
messageDiv.style.color = '#dc3545';
messageDiv.style.textAlign = 'center';
messageDiv.style.fontSize = '12px';
messageDiv.style.padding = '2px';
messageDiv.style.zIndex = '9999';
messageDiv.style.fontFamily = 'Arial, sans-serif';

// Append the div to the body
document.body.appendChild(messageDiv);