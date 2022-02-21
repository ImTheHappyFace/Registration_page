
    var searchInput = 'search_input';
     
    $(document).ready(function () {
     var autocomplete;
     autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
      types: ['geocode'],
      componentRestrictions: {
       country: "IN"
      }
     });
      
     google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var near_place = autocomplete.getPlace();
     });
    });



    function validatePhoneNumber(input_str) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        return re.test(input_str);
    }


    function check() {
        if (document.getElementById('confirm_password').value.length>5) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'Strong Password';
            return true
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'Password too short';
          return false
        }
      }



    function ShowAlert(event) {
        var name = document.getElementById("name_").value
        var email = document.getElementById('txtEmailId');
        var phone = document.getElementById('myform_phone').value;
        var confPass = document.getElementById("confirm_password").value
        var gender = document.getElementsByName('gender')
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(name ==""){
                swal("Invalid Name", "Enter a Valid Name", "info");
                name.focus
                return false;
            }

            if(document.getElementById('search_input').value === ""){
                swal(` No Location Selected`, "'Please provide a valid address'", "info");
                event.preventDefault();
            }
        
          else if (!filter.test(email.value)) {
            swal(`${email.value}  invalid Email`, "'Please provide a valid email address'", "info");
              email.focus;
              return false;
          }
          else if (!validatePhoneNumber(phone)) {
            // document.getElementById('phone_error').classList.remove('hidden');
            swal(`${phone}  invalid Phone number`, "'Please provide a Phone email'", "info");
            phone.focus;
            return false;
       }

       else if(!check()){
        swal(`Enter Your Password`, "'Password!?'", "info");

    }

       else if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
        swal(`Please Select your Gender`, "'Gender!?'", "info");
        return false;
    }

 

    

    // if(pass !== confPass){
    //     alert("Password doesn't match")
    //     returnToPreviousPage();
    //     return false;
        
        
    // }



       else{
            swal("Good job!", "Form Sucessfully Submitted", "success");
            
       }
    //    event.preventDefault();
    }




    
    // function validateForm(event) {
    //     var phone = document.getElementById('myform_phone').value;
    //     if (!validatePhoneNumber(phone)) {
    //         // document.getElementById('phone_error').classList.remove('hidden');
    //         alert("enter correct phone number")
    //     } else {
    //         document.getElementById('phone_error').classList.add('hidden');
    //         alert("validation success")
    //     }
    //     event.preventDefault();
    // }
    
    // document.getElementById('myform').addEventListener('submit', validateForm);


    // Password Toggle

    function Toggle() {
        var temp = document.getElementById("confirm_password");
        if (temp.type === "password") {
            temp.type = "text";
        }
        else {
            temp.type = "password";
        }
    }