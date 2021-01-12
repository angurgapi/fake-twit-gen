<template>

<div class='user-data'>
  <form>
   
      <label>Author</label>
      <input type="textarea" class='form-author' ref='author'>
      <label>Login</label>
      <input type="textarea" class='form-login' ref='login'>   
      <label>Twit text</label>
      <input type="textarea" class='form-body' ref='twitText' maxlength="280">
      <label>Userpic url</label>
      <input type="textarea" class='form-userpic' ref='userpic'>
    
    <div class='form-timedate'>
      <label>Time</label>
      <input type="textarea" class='form-time' ref='time'>
      <label>Date</label>
      <input type="textarea" class='form-date' ref='date'>
    </div>
      <label>Version</label>
      <input type="textarea" class='form-version' ref='version'>
  </form>
</div>
</template>

<style lang='sass'>
.user-data
  margin-top: 15px
  width: 60%
  max-width: 600px
  min-width: 350px
  @include flexcolcent

input
  width: 100%
  height: 36px
  border-radius: 10px

.form-timedate
  width: 100%
  display: flex
  flex-direction: row
  align-items: center
  margin-top: 20px

.twit-text
  margin-top: 20px

.time-date
  ul
    display: flex
    flex-direction: row
    list-style: none
    padding-left: 0
    border-bottom: 0 solid rgb(0,0,0)
    li
      margin-right: 4px

.time, .date
  color: rgb(101, 119, 134)

.version
  color: rgb(27, 149, 224)

</style>


<script>
export default{
  mounted(){
  	this.processInputs()
  	
  },
  methods: {
  	processInputs(){
      this.$refs.author.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formAuthor))
      this.$refs.login.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formLogin))
      this.$refs.twitText.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formText))
      this.$refs.time.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formTime))
      this.$refs.date.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formDate))
      this.$refs.version.addEventListener('input', (e) => this.updateText(e, this.$parent.$refs.formVersion))
      this.$refs.userpic.addEventListener('input', (e) => this.updatePic(e))


    },
    updateText(e, domchild){
    	domchild.textContent = e.target.value
    },
    updatePic(e){
    	let inputUrl = e.target.value
	    this.$parent.$refs.formPic.src = `${inputUrl}`
    }

 
}	
}
</script>