const {createApp} = Vue;

createApp ({
  data(){

    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails: [],
      loading: true,
      maxMail: 10,
      limit: 10
    }

  },
//Chiamata API
  methods:{
    getApi(){

      this.loading = true;

      axios.get(this.apiUrl)
        .then( res => {
        //uso la proprità response
        this.mail = res.data.response
        console.log(this.mails);
        this.mails.push(res.data.response);
        this.loading =false
      })
    }
  },
  mounted(){
    for(let i = 0; i < this.limit; i++)
    this.getApi()
  }

}).mount('#app')