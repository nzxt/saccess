<template>
  <div id="error">
    <v-layout row wrap>
      <v-flex xs8>
        <v-card>
          <v-card-title class="headline orange--text darken-1">
            {{ $t('title') }}
          </v-card-title>

          <v-card-text>
            <i18n path="message" tag="p" class="subheading">
              <router-link to="/Account/Login">
                {{ $t('link') }}
              </router-link>
            </i18n>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
module.exports = {
  name: 'error'
}
</script>

<i18n>
    {
        "en": {
            "title": "Page not found!",
            "link": "Login or Register",
            "message": "We are so sorry! ;( You maybe want to {0}?"
        },

        "ru": {
            "title": "Страница не найдена!",
            "link": "Войти или Зарегистрироваться",
            "message": "Ой, как неудобно! ;( Вы, возможно, хотите {0}?"
        },

        "ua": {
            "title": "Сторінка не знайдена!",
            "link": "Увійти або Зареєструватись",
            "message": "Нам так прикро! ;( Ви, можливо, хотіли {0}?"
        }
    }
</i18n>
