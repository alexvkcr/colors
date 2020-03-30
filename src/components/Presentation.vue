<template>
  <div id="Presentation">
    <transition name="slide-fade" mode="out-in">
      <div class="play" v-if="!playOn" @click="openPlay">{{$t('play')}}</div>" mode="in-out">
      <play v-if="playOn" :prop-colour-list="propColourList"></play>
    </transition>
    <div class="coloured-section">
      <h2>{{ $t('welcome') }}</h2>
      <div class="select-group">
        <p>{{$t('change')}}</p>
        <select class="language" v-model="$root.$i18n.locale">
          <option value="en">{{$t('en')}}</option>
          <option value="es">{{$t('es')}}</option>
        </select>
      </div>
      <ul class="texts">
        <li>{{ $t('what') }}</li>
        <li>{{ $t('what2') }} </li>
        <li>{{ $t('explanation') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    'propColourList': Object
  },
  data: () => ({
    playOn: false
  }),  
  methods: {
    onChange(event) {
      console.log(event.target.value)
    },
    openPlay(){
      this.playOn=true
    }
  },
  components: {
    play: () => import(/* webpackChunkName: "play" */'./Play.vue'),
  }
}
</script>

<i18n>
{
  "es": {
    "play": "¡JUEGA YA!",
    "welcome": "¡Bienvenidos a GetColors!",
    "what": "Esta es una página dónde encontrarás divertidos juegos para entretenerte y convertirte en alguien distinguido que sabe de colores al mismo tiempo.",
    "what2": "Escoge sabiamente tu juego ya que estos son muy distintos en dificultad.",
    "explanation": "Encontrarás las instrucciones para cada juego debajo de él cuando lo selecciones.",
    "change": "Cambiar idioma",
    "en": "Inglés",
    "es": "Español"
  },
  "en": {
    "play": "PLAY NOW!",
    "welcome": "Welcome to GetColors!",
    "what": "This is a web where you'll find fun games to amuse yourself and become someone distiguished whom knwos about colors at the same time",
    "what2": "Choose wisely your game since they are very different in difficuty",
    "explanation": "You'll find the instructions for each game under it when you select it",
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
#Presentation{
  max-width: 1024px;
}
.play{
  width: 180px;/*margin-left depends on this size */
  padding: 16px 32px;
  margin-top: 30px;
  margin-left: calc(50% - 90px);
  text-align: center;

  border: 0.8px solid lightyellow;
  border-radius: 6px;
  background-color: white;
  color: darkolivegreen;

  font-weight: bold;
}
.play:hover{
  border: 0.8px solid black;
  background-color: lightgrey;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.coloured-section{
  margin: 40px 10%;
  padding: 10px 20px;
  min-width: 250px;
  background-color: #b8e0dc;
}

h2{
  padding-top: 10px;
  text-align: center;
}

.select-group{
  display: inline-block;
  font-weight: bold;
}

select{
  width: 7em;

  background-color: aliceblue;
  border-style: outset;
  border-radius: 5px;
}

.texts{
  display: inline-block;
  width: 76%;
  padding: 30px;
}

</style>
