const messagebox = document.getElementById('contact_box')
const messagebox_original_size = messagebox.style.height

const button = document.getElementById('button')

const username = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const alertmessage = document.getElementById('alertmessageid');
const red_color = alertmessage.style.color
const error_name = "Veuillez entrer un nom"+"<br>"
const error_email = "L'adresse email est invalide"+"<br>"
const error_message = "Le message est vide"+"<br>"
var number_of_lines = 0
var string_error = ""

function test() {
  number_of_lines = 0
  messagebox.style.height = "80%"
  button.style.marginTop = "7%"
  alertmessage.style.top = "75%"

    string_error = ""
    everything_is_valid = true
    ValidateName(username)
    ValidateEmail(email)
    ValidateMessage(message)
    if (string_error.length == 0){
      alertmessage.textContent = "Nice"
      alertmessage.style.color = 'green'
    }else{
      alertmessage.innerHTML = string_error
      alertmessage.style.color = red_color
      if (number_of_lines>1){
      alertmessage.style.top = String(75-1*number_of_lines)+"%"
      messagebox.style.height = String(80+5*number_of_lines)+"%"
      button.style.marginTop = String(5.5*number_of_lines)+"%"
      }
    }
}

function ValidateEmail(input) {
    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!input.value.match(validRegex)) {
      string_error += error_email
      number_of_lines ++
    }
  }

function ValidateName(input){
  if (input.value.length==0){
    string_error += error_name
    number_of_lines ++
  }
}

function ValidateMessage(input){
  if (input.value.length==0){
    string_error += error_message
    number_of_lines ++
  }
}