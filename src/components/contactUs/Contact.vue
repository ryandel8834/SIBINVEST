<template>
  <b-container class="pt-5 pl-0 pr-0" id="contact-us">
    <b-row>
      <b-col class="contact-information" lg="6" sm="12">
        <div>
          <h1 style="color: black;">KONTAKTIRAJTE NAS</h1>
          <p><b class="bebas">SIB INVEST DOO</b>, Niš</p>
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
          <b-form-group>
            <b-form-input
              id="name"
              placeholder="Ime"
              style="color: black;"
              name="user_name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="email"
              placeholder="Email"
              style="color: black;"
              name="user_email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-textarea
              style="color: black;"
              rows="6"
              id="contact-us-txt-area"
              class="form-control"
              placeholder="Vasa poruka"
              name="user_message"
            ></b-textarea>
            <b-button type="submit" class="btn mt-3 float-right send-form pl-4 pr-4"
              >pošalji</b-button
            >
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "gmail_services",
          "gmail_services",
          e.target,
          "user_lEfbVDh5YUYMSXTjIhP7n"
        )
        .then(
          result => {
            console.log("SUCCESS!");
          },
          error => {
            console.log("FAILED...", error);
          }
        );
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
#email {
  margin-top: 30px;
  margin-bottom: 30px !important;
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
</style>
