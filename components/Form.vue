<template>

  <form class="user-form">   
    <input type="text" class='form-input' ref='author' placeholder="Author">
    <input type="text" class='form-input' ref='login' placeholder="Username">   
    <textarea class='form-input textarea' ref='twitText' maxlength="280" placeholder="Twit content"></textarea>
    <input type="text" class='form-input' ref='userpic' placeholder="Avatar url">
    <input type="text" class='form-input' ref='time' placeholder="Time">
    <input type="text" class='form-input' ref='date' placeholder="Date">  
    <input type="text" class='form-input' ref='version' placeholder="Twitter version">
  </form>

</template>

<style lang='sass'>
.user-form
  margin-top: 15px
  width: 600px
  max-width: 90%
  @include flexcolcent

.form-input
  width: 100%
  outline: none
  height: 36px
  border-radius: 5px
  margin-top: 10px
  padding: 5px

.textarea
  height: 100px
</style>


<script>
export default{
  name: 'Form',
  mounted(){
  	this.processInputs()
  	
  },
  methods: {
  	processInputs(){
      this.$refs.author.addEventListener('input', (e) => this.$parent.twitAuthor = event.target.value)
      this.$refs.login.addEventListener('input', (e) => this.$parent.twitLogin = event.target.value)
      this.$refs.twitText.addEventListener('input', (e) => this.$parent.twitContent = event.target.value)
      this.$refs.time.addEventListener('input', (e) => this.$parent.twitTime = event.target.value)
      this.$refs.date.addEventListener('input', (e) => this.$parent.twitDate = event.target.value)
      this.$refs.version.addEventListener('input', (e) => this.$parent.twitVersion = event.target.value)
      this.$refs.userpic.addEventListener('input', (e) => this.$parent.avatarUrl = event.target.value)
    },
}	
}
</script>