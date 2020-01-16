<template>
  <div id="contact-us">
    <b-container class="pt-0 pt-md-5 pl-0 pr-0 px-4 px-sm-0">
      <b-row class="px-0 pt-0">
        <b-col class="contact-information" lg="6" sm="12">
          <div>
            <h1 style="color: black;">KONTAKTIRAJTE NAS</h1>
            <p>
              <b class="bebas">SIB INVEST DOO</b>, Niš
            </p>
            <p>Privredno društvo za građevinske radove</p>
          </div>
          <div class="mt-2 mb-2">
            <p>Stojana Novakovića 17a, lok.1</p>
            <p>Telefon: +381 64 8 227 200</p>
          </div>
          <div>
            <p>PIB: 105470608</p>
            <p>MB: 20393742</p>
            <p>Tekući račun: 145-24361-30 Expo banka</p>
            <p>sibinvestdoo@gmail.com</p>
          </div>
        </b-col>
        <b-col class="contact-information" lg="6" sm="12">
          <b-form @submit.prevent="sendEmail">
            <div v-if="!submitted">
              <b-form-group>
                <b-form-input
                  @blur="submitName"
                  id="name"
                  placeholder="Ime"
                  style="color: black;"
                  name="user_name"
                  v-model="name"
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid':
                      !validName(name) && nameBlured && removeInvalidName
                  }"
                ></b-form-input>
                <div
                  class="invalid-feedback pt-2 pl-1"
                  style="max-height:0px; color:red;"
                  v-show="elementVisible"
                >Molimo Vas unesite Vase ime</div>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  @blur="submitEmail"
                  id="email"
                  placeholder="Email"
                  style="color: black;"
                  name="user_email"
                  v-model="email"
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid':
                      !validEmail(email) && emailBlured && removeInvalidEmail
                  }"
                  v-on:blur="emailBlured = true"
                ></b-form-input>
                <div
                  class="invalid-feedback pt-2 pl-1"
                  style="max-height:0px; color:red;"
                  v-show="elementVisible"
                >Molimo Vas unesite ispravnu email adresu</div>
              </b-form-group>
              <b-form-group>
                <b-textarea
                  @blur="submitMessage"
                  v-model="text"
                  style="color: black;"
                  rows="6"
                  id="contact-us-txt-area"
                  class="form-control"
                  placeholder="Vasa poruka"
                  name="user_message"
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid':
                      !validMessage(text) && textBlured && removeInvalidText
                  }"
                  v-on:blur="textBlured = true"
                ></b-textarea>
                <div
                  class="invalid-feedback pt-2 pl-1"
                  style="max-height:0px; color:red;"
                  v-show="elementVisible"
                >Molimo Vas unesite poruku</div>
              </b-form-group>
              <b-form-group>
                <b-button type="submit" class="btn mt-3 float-right send-form pl-4 pr-4">pošalji</b-button>
              </b-form-group>
            </div>
            <div v-else class="alert alert-success" role="alert">
              <h5>Hvala vam</h5>
              <p>Vasa poruka je poslata, ubrzo ce Vas neko kontaktirati</p>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data: function() {
    return {
      name: "",
      nameBlured: "",
      text: "",
      textBlured: false,
      email: "",
      targetEl: {},
      emailBlured: false,
      valid: false,
      submitted: false,
      elementVisible: true,
      isValidName: false,
      isValidText: false,
      isValidEmail: false,
      removeInvalidName: false,
      removeInvalidEmail: false,
      removeInvalidText: false
    };
  },
  methods: {
    validateName: function() {
      this.nameBlured = true;
      if (this.validName(this.name)) {
        this.isValidName = true;
        this.removeInvalidName = false;
      } else {
        this.isValidName = false;
        this.removeInvalidName = true;
      }
    },
    validateEmail: function() {
      this.emailBlured = true;
      if (this.validEmail(this.email)) {
        this.isValidEmail = true;
        this.removeInvalidEmail = false;
      } else {
        this.isValidEmail = false;
        this.removeInvalidEmail = true;
      }
    },
    validateText: function() {
      this.textBlured = true;
      if (this.validMessage(this.text)) {
        this.isValidText = true;
        this.removeInvalidText = false;
      } else {
        this.isValidText = false;
        this.removeInvalidText = true;
      }
    },
    validEmail: function(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    validMessage: function(message) {
      if (message === "") {
        return false;
      } else {
        return true;
      }
    },
    validName: function(name) {
      if (name === "") {
        return false;
      } else {
        return true;
      }
    },
    submitName: function() {
      this.validateName();
    },
    submitEmail: function() {
      this.validateEmail();
    },
    submitMessage: function() {
      this.validateText();
    },
    sendEmail(e) {
      this.checkIsValid(e);
    },
    checkIsValid(event) {
      console.log(this.isValidEmail);
      this.validateName();
      this.validateEmail();
      this.validateText();
      if (this.isValidText && this.isValidEmail && this.isValidName) {
        //THIS IS WHERE YOU SUBMIT DATA TO SERVER
        emailjs
          .sendForm(
            "gmail",
            "sibinvestdoo",
            event.target,
            "user_3UfiOi0iiKLucStEtqT7h"
          )
          .then(
            result => {
              console.log("SUCCESS!");
            },
            error => {
              console.log("FAILED...", error);
            }
          );
        this.submitted = true;
        this.removeInvalidName = false;
        this.removeInvalidText = false;
        this.removeInvalidEmail = false;
        setTimeout(() => {
          this.submitted = false;
          this.name = "";
          this.email = "";
          this.text = "";
          this.isValidName = false;
          this.isValidEmail = false;
          this.isValidText = false;
        }, 4000);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  letter-spacing: 1px;
}
.form-control {
  border: 2px solid black;
}
.form-control:focus {
  box-shadow: none;
}
.form-group {
  margin-bottom: 2rem;
}
.send-form {
  background: rgb(4, 5, 4);
  border-radius: 15px;
  padding: 3px 0;
}
.warning {
  border-color: red;
  border: 1px solid;
}
.success {
  border-color: green;
  border: 1px solid;
}
div p {
  margin-bottom: 0px;
}
.bebas {
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
  font-size: 20px;
}
.contact-information input,
.contact-information textarea {
  border-radius: 0;
}
#contact-us-txt-area {
  height: 120px;
}
@media (max-width: 991px) {
  .row {
    padding: 5%;
  }
  .contact-information {
    padding-bottom: 10%;
  }
}
#contact-us {
  margin-top: 80px;
}
.alert {
  padding-top: 1.5rem;
}
.alert h5 {
  margin-bottom: 0rem;
}
</style>
