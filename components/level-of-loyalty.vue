<template>
  <!-- <div> -->
  <v-layout row wrap>
    <v-flex xs12>
      <span class="display-1 blue-grey--text">
        <!-- {{ $t('testViewTitle', { testName: testName }) }} -->
      </span>
    </v-flex>

    <v-flex xs9>
      <v-tabs
        id="question-sets"
        v-model="activeTab"
        grow
        scroll-bars
        light
      >
        <v-tabs-bar slot="activators">
          <v-tabs-item
            v-for="(questionSet, index) in testModel.questionSets"
            :key="questionSet.sequentialNumber"
            :id="questionSet.id"
            :href="`#question-set-${index}`"
            class="question-set"
            ripple
          >
            Набор {{ questionSet.name }}
          </v-tabs-item>

          <v-tabs-slider />
        </v-tabs-bar>

        <v-tabs-content
          v-for="(questionSet, index) in testModel.questionSets"
          :key="questionSet.sequentialNumber"
          :id="`question-set-${index}`"
        >
          <draggable v-model="questionSet.questions">
            <v-card
              v-for="question in questionSet.questions"
              :key="question.id"
              :id="question.id"
              class="question teal lighten-4 elevation-2 mt-2"
              height="34px"
            >
              <v-card-text style="padding: 6px 25px;">
                <v-icon large class="red white--text mr-2">
                  swap_vert
                </v-icon>
                {{ question.questionText.find(x => x.locale === locale).text }}
              </v-card-text>
            </v-card>
          </draggable>
        </v-tabs-content>
      </v-tabs>
    </v-flex>

    <v-flex xs3>
      <v-card class="mt-3">
        <v-card-text class="text-xs-center">
          <v-btn
            id="testFinishButton"
            @click.stop="finishTest"
            dark
            large
            warning
          >
            {{ $t('testFinishButtonCaption') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>

  <!-- <dialog-success-test-complete :show="dialogSuccess" :timeout="5000" />
    <dialog-warning-test-timedout :show="dialogTimedout" :timeout="5000" /> -->
  <!-- </div> -->
</template>

<script>
// import querystring from 'querystring'
// import draggable from 'vuedraggable'
// import dialogSuccessTestComplete from './tests/dialog-success-test-complete'
// import dialogWarningTestTimedout from './tests/dialog-warning-test-timedout'

module.exports = {
  name: 'level-of-loyalty',

  data() {
    return {
      // locale: this.$store.state.locale,

      testModel: {},
      testName: null,
      activeTab: null,

      dialogSuccess: false,
      dialogTimedout: false
    }
  },

  // components: {
  //   draggable,

  //   dialogSuccessTestComplete,
  //   dialogWarningTestTimedout
  // },

  // created() {
  //   this.$http.get('/TestConduct/GetTestModel', {
  //     params: {
  //       id: this.$route.query.taId
  //     }
  //   })
  //     .then((response) => {
  //       const data = response.data

  //       this.testModel = data

  //       this.testName = data.testName
  //         .find(x => x.locale === this.locale).name

  //       this.$refs.countdownTimer.duration =
  //                       this.$refs.countdownTimer.timeLeft =
  //                           data.duration

  //       this.$refs.countdownTimer.delta = 100 / data.duration
  //     })
  //     .catch(error => console.log(error))
  // },

  methods: {
    startTest() {
      // this.activeTab = 'question-set-0'
      // this.$refs.countdownTimer.startTimer()
    },

    finishTest() {
      // const timeLeft = this.$refs.countdownTimer.timeLeft

      // const testFinishButton = document.querySelector('#testFinishButton')
      // testFinishButton.disabled = true

      // window.clearInterval(this.$refs.countdownTimer.timerTaskID)

      // if (!timeLeft) {
      // this.dialogTimedout = true
      // setTimeout(()=> { this.dialogTimedout = false; }, 5000);
      // }

      // const answersData = []

      // const timeElapsed = this.testModel.duration - timeLeft
      // const questionSets = Array.from(document.querySelectorAll('.question-set'))

      // questionSets.forEach((element, index) => {
      // const questions = Array.from(document.querySelectorAll(`#question-set-${index} .question`))
      // const answers = []

      // questions.forEach((element) => {
      // answers.push(element.getAttribute('id'))
      // })

      // const answerSet = {
      //   Id: questionSets[index].id,
      //   Answers: answers
      // }

      // answersData.push(answerSet)
      // })

      // this.$http.post('/TestConduct/SaveResult', {
      //   testAssignmentId: this.$route.query.taId,
      //   answers: JSON.stringify(answersData),
      //   timeElapsed: timeElapsed
      // })
      //   .then((response) => {
      //     this.dialogSuccess = true
      //     this.$router.push('/TestConduct')
      //     // setTimeout(()=> { this.dialogSuccess = false; }, 5000);
      //   })
      //   .catch(error => console.log(error))
    }
  }
}
</script>
