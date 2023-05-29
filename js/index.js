const { createApp } = Vue;

createApp({
  data() {
    return {
      emailNumber: 10,
      mailingList: []
    }
  },

  mounted() {
    for(let i = 0; i < this.emailNumber; i++) {

      // Richiesta all'API 

      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
      answer => {

        this.mailingList[i] = answer.data.response;
        
      }
    )
    }
  }

}).mount("#myapp")