// Create a new id element
const messageid = document.createElement('id');
// Style the id
messageid.style.position = 'fixed';
messageid.style.bottom = '0';
// messageid.style.width = '100%';
messageid.style.backgroundColor = '#cdced0';
messageid.style.color = '#dc3545';
messageid.style.textAlign = 'center';
messageid.style.fontSize = '12px'; 
messageid.style.padding = '2px';
messageid.style.zIndex = '9999';
messageid.style.fontFamily = 'Arial, sans-serif';

// Set the message
messageid.textContent = 'TUSK-Privacy Installed.';

// Append the id to the body
document.body.appendChild(messageid);
