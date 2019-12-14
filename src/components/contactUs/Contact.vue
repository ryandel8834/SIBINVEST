<template>
  <b-container class="pt-5 pl-0 pr-0">
    <b-row>
      <b-col class="contact-information" cols="6">
        <div>
          <h2 style="color: black; font-weight: bold;">KONTAKTIRAJTE NAS</h2>
          <p>
            <b>SIB INVEST DOO</b> , Niš
          </p>
          <p>Privredno društvo za građevinske radove</p>
        </div>
        <div class="mt-3 mb-3">
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
      <b-col class="contact-information" cols="6">
        <b-form>
          <b-form-group>
            <b-form-input id="name" type="name" placeholder="Ime" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input id="email" type="email" placeholder="Email" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-textarea
              rows="6"
              id="contact-us-txt-area"
              class="form-control"
              placeholder="Vasa poruka"
            ></b-textarea>
            <b-button class="btn mt-3 float-right send-form pl-4 pr-4">Posalji</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.form-control {
  border: 2px solid black;
}
.form-control:focus {
  box-shadow: none;
}
.send-form {
  border-radius: 15px;
  background: rgb(4, 5, 4);
}
div p {
  margin-bottom: 0px;
}
</style>