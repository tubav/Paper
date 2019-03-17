// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  function showResult() {
    var first=$('#first').val()
    var last=$('#last').val()
    var mail=$('#mail').val()
    var institution=$('#institution').val()
    var country=$('#country').val()
    var city=$('#city').val()
    var zip=$('#zip').val()
    var type=$('#type').val()
    var title=$('#title').val()
    var context=$('#context').val()
    var problem=$('#problem').val()
    var work=$('#work').val()
    var approach=$('#approach').val()
    var result=$('#result').val()
    var evaluation=$('#evaluation').val()
    var outlook=$('#outlook').val()

    $("#result-content").append("git clone https://github.com/tubav/Paper.git\n")
    $("#result-content").append("cd Paper\n")
    $("#result-content").append("make\n")
    $("#result-content").append("./lib/fillTemplate.py")
    $("#result-content").append(` --first "${first}"`)
    $("#result-content").append(` --last "${last}"`)
    $("#result-content").append(` --mail "${mail}"`)
    $("#result-content").append(` --institution "${institution}"`)
    $("#result-content").append(` --country "${country}"`)
    $("#result-content").append(` --city "${city}"`)
    $("#result-content").append(` --zip "${zip}"`)
    $("#result-content").append(` --title "${title}"`)
    $("#result-content").append(` --context "${context}"`)
    $("#result-content").append(` --problem "${problem}"`)
    $("#result-content").append(` --work "${work}"`)
    $("#result-content").append(` --approach "${approach}"`)
    $("#result-content").append(` --result "${result}"`)
    $("#result-content").append(` --evaluation "${evaluation}"`)
    $("#result-content").append(` --outlook "${outlook}"`)
    $("#result-box").show()        
    $("#question-box").hide()
  }
  
  window.addEventListener('load', function () {
    // testing: fill out all forms fields
    $('#dummy').on('click', function() {
	    Array.prototype.forEach.call($(':text'), function(e) {e.value = e.placeholder});	
    })

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')
    
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()
          showResult()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
