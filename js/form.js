


function getFormValue(ev) {
    // DISABLE DEFAULT FORM SUBMIT ACTION
    ev.preventDefault();
  
    // PICK THE FORM REFERENCE
    const form = document.getElementById('form1');
    
    // GET ALL ELMENTS LIKE INPUT AND SELECT, YOU CAN ADD MANY MORE
    const allInputs = form.querySelectorAll('input,select');
    
    let formObj = {};
    
    // GET THE VALUES OF EACH FIELD
    allInputs.forEach(e => {
      
      // ALL KEY DEPENDS ON THE NAME IN THE ELEMENT
      const key = e.getAttribute('name');
      
      if(key){
        formObj[key] = e.value;
      } 
      
    });
    
    console.log(formObj);
  }