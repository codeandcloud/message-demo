
$(document).ready(() => {
  
  $('#show-generic-message').click(evt =>{
    evt.preventDefault();
    alert(appMessage.genericError);
  });
  
  $('#show-add-user-message').click(evt =>{
    evt.preventDefault();
    alert(appMessage.index.addUserSuccessMessage);
  });
  
});