
    //for adding an input when other option is clicked from contact section
    function showField(){
      document.getElementById('otherInput').innerHTML=
      ` <div class = "form-group col-lg-12" >
        <input type="text" name="other" id = "otherOption" />
        <button type="button" name="button" onclick= "myFunction()" >ok</button>
        </div>
      `;
     }
    //fetching input data of other option and assigning it to "Other"'s value then removing input section.
    function myFunction() {
      event.preventDefault()
      console.log(document.getElementById('otherNavigation').value);
      var x = document.getElementById('otherOption').value
      document.getElementById('otherNavigation').innerText = x;
      console.log(x,"jjjjjjjjjj");
      document.getElementById('otherNavigation').value = x;
      console.log(document.getElementById('otherNavigation').value);
      document.getElementById('otherInput').innerHTML = ``;
    }

    
