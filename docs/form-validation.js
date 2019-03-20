// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  function showResult() {
	var result = {
		    first: $('#first').val().replace('"','\\"'),
		    last: $('#last').val().replace('"','\\"'),
		    mail: $('#mail').val().replace('"','\\"'),
		    institution: $('#institution').val().replace('"','\\"'),
		    country: $('#country').val().replace('"','\\"'),
		    city: $('#city').val().replace('"','\\"'),
		    zip: $('#zip').val().replace('"','\\"'),
//		    type: $('#type').val().replace('"','\\"'),
		    title: $('#title').val().replace('"','\\"'),
		    context: $('#context').val().replace('"','\\"'),
		    problem: $('#problem').val().replace('"','\\"'),
		    work: $('#work').val().replace('"','\\"'),
		    approach: $('#approach').val().replace('"','\\"'),
		    result: $('#result').val().replace('"','\\"'),
		    evaluation: $('#evaluation').val().replace('"','\\"'),
		    outlook: $('#outlook').val().replace('"','\\"')
    };
    //todo: iterate over result and escape double quotes
    $("#result-content").append("$ git clone https://github.com/tubav/Paper.git\n")
    $("#result-content").append("$ cd Paper\n")
    $("#result-content").append("$ make\n")
    $("#result-content").append("$ ./lib/fillTemplate.py")
    $("#result-content").append(` --first "${result.first}"`)
    $("#result-content").append(` --last "${result.last}"`)
    $("#result-content").append(` --mail "${result.mail}"`)
    $("#result-content").append(` --institution "${result.institution}"`)
    $("#result-content").append(` --country "${result.country}"`)
    $("#result-content").append(` --city "${result.city}"`)
    $("#result-content").append(` --zip "${result.zip}"`)
    $("#result-content").append(` --title "${result.title}"`)
    $("#result-content").append(` --context "${result.context}"`)
    $("#result-content").append(` --problem "${result.problem}"`)
    $("#result-content").append(` --work "${result.work}"`)
    $("#result-content").append(` --approach "${result.approach}"`)
    $("#result-content").append(` --result "${result.result}"`)
    $("#result-content").append(` --evaluation "${result.evaluation}"`)
    $("#result-content").append(` --outlook "${result.outlook}"`)
    $("#result-content").append("\n")
    $("#result-content").append("$ make quick open")
    $("#result-box").show()        
    $("#question-box").hide()        
    $("#get-button").hide()
    $('#zip-button').show()
  }
  
  window.addEventListener('load', function () {
    // testing: fill out all forms fields
    $('#dummy').on('click', function() {
	    Array.prototype.forEach.call($(':text'), function(e) {e.value = e.placeholder});	
    })    
    var forms = document.getElementsByClassName('needs-validation')
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function listener(event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } else {
	      if (! $('#zip-button').is(":visible")) {
              event.preventDefault()
		      event.stopPropagation()
		      showResult()
	      }
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
