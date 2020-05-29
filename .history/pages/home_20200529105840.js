
$(document).ready(() => {
  
  $('#show-generic-message').click(evt =>{
    evt.preventDefault();
    alert(message.genericError);
  });
  
  $('#show-add-user-message').click(evt =>{
    evt.preventDefault();
    alert(message.index.addUserSuccessMessage);
  });
  
});