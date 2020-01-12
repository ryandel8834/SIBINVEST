<template>
  <div id="contact-us">
    <b-container class="pt-5 pl-0 pr-0">
      <b-row>
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
                  'is-invalid': !validName(name) && nameBlured
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
                  'is-invalid': !validEmail(email) && emailBlured
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
                  'is-invalid': !validMessage(text) && textBlured
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
                <b-button
                  @click="checkIsValid"
                  type="submit"
                  class="btn mt-3 float-right send-form pl-4 pr-4"
                >pošalji</b-button>
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
      emailBlured: false,
      valid: false,
      submitted: false,
      elementVisible: true,
      isValidName: false,
      isValidText: false,
      isValidEmail: false
    };
  },
  methods: {
    validateName: function() {
      this.nameBlured = true;
      if (this.validName(this.name)) {
        this.isValidName = true;
      }
    },
    validateEmail: function() {
      this.emailBlured = true;
      if (this.validEmail(this.email)) {
        this.isValidEmail = true;
      }
    },
    validateText: function() {
      this.textBlured = true;
      if (this.validMessage(this.text)) {
        this.isValidText = true;
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
      // if (this.valid) {
      //   //THIS IS WHERE YOU SUBMIT DATA TO SERVER
      //   this.submitted = true;
      //   this.sendEmail();
      //   setTimeout(() => {
      //     this.submitted = false;
      //   }, 4000);
      // }
    },
    submitEmail: function() {
      this.validateEmail();
    },
    submitMessage: function() {
      this.validateText();
    },
    removeInvalid() {
      this.submitted = false;
      this.name = "";
      this.email = "";
      this.text = "";
      this.elementVisible = false;
      let element = document.querySelectorAll("is-invalid");
      element.ClassList.remove("is-invalid");
    },
    checkIsValid: function() {
      console.log(this.isValidEmail);
      if (this.isValidName && this.isValidEmail && this.isValidText) {
        //THIS IS WHERE YOU SUBMIT DATA TO SERVER
        this.submitted = true;
        setTimeout(() => this.removeInvalid(), 500);
      }
    },
    sendEmail: e => {
      // emailjs
      //   .sendForm(
      //     "gmail",
      //     "sibinvestdoo",
      //     e.target,
      //     "user_3UfiOi0iiKLucStEtqT7h"
      //   )
      //   .then(
      //     result => {
      //       console.log("SUCCESS!");
      //     },
      //     error => {
      //       console.log("FAILED...", error);
      //     }
      //   );
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
/* .form-group {
  position: relative;
}
.warning-msg {
  position: absolute;
  color: red;
}
#name-missing {
  top: -25px;
}
#email-missing {
  top: 5px;
}
#email-incorrect {
  top: 5px;
}
#message-missing {
  top: -23px;
} */
</style>
