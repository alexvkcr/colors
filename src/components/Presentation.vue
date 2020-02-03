<template>
  <div class="Presentation">
    <h2>{{ $t('welcome') }}</h2>
    <div class="select">
      <p>{{$t('change')}}</p>
      <select v-model="$root.$i18n.locale">
        <option value="en">{{$t('en')}}</option>
        <option value="es">{{$t('es')}}</option>
      </select>
    </div>
    <h3>{{ $t('learn') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  methods: {
    onChange(event) {
        console.log(event.target.value)
    }
  }
}
</script>

<i18n>
{
  "es": {
    "welcome": "¡Bienvenidos a GetColors!",
    "learn": "Aquí puedes aprender los nombres de TODOS los colores existentes",
    "change": "Cambiar idioma",
    "en": "Inglés",
    "es": "Español"
  },
  "en": {
    "welcome": "Welcome to GetColors!",
    "learn": "Here you can learn the name of ALL the existing colors",
    "change": "Switch language",
    "en": "English",
    "es": "Spanish"
  }
}
</i18n>

<style scoped>
*{
    color: #2e586c;
}
.Presentation{
    margin: 0 10%;
    min-width: 250px;
    background-color: #b8e0dc;
  }
h2,h3{
    margin: 30px 0;
    text-align: center;
}
.select{
  position: relative;
  bottom: 30px;
  left: 50%;
}
@media screen and (min-width: 600px) {
  .select{
    left: 90%;
  }
}

</style>
