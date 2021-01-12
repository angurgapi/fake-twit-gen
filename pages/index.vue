<template>
  <div class='page-wrapper'>

    <h2 class='page-header'>WRITE, TAKE A SCREENSHOT & CROP</h2>

    <div class="twit-wrapper">
    <div class='twit'>
      <div class='twit__head'>
        <div class="userpic">
          <img class="userpic" ref = 'formPic' src='https://icdn.lenta.ru/images/2019/12/06/10/20191206104306174/pwa_vertical_1280_4c9fd519bc66e04b4a6eb24307a025ad.jpg'>
        </div>
        <div class='nickname'>
          <div class="name" ref='formAuthor'>Elon Musk</div>
          <div class="login" ref='formLogin'>@elonmusk</div>
        </div>
      </div>
      <div class='twit-text'>
        <span class="twit-content" ref='formText'>Hehehe welcome to my twitter</span>
      </div>
      <div class="time-date">
        <ul>
          <li class="time" ref='formTime'>12:01 AM</li>
          <li>·</li>
          <li class="date" ref='formDate'>Jul 21, 2020</li>
          <li>·</li>
          <li class="version" ref='formVersion'>Twitter for Android</li>
        </ul>
      </div>
    </div>
    </div>

    <Form />
  </div>
</template>


<style scoped lang="sass">
.page-header
  font-size: 32px
  text-align: center
.twit-wrapper
  margin-top: 30px
  width: 600px
  @include flexcolcent
  border: 5px dashed rgba(0,0,0,.2)


.twit
  margin: 20px
  padding: 10px
  display: flex
  flex-direction: column
  width: 100%
  min-width: 350px


@media (max-device-width: 500px)
  .twit-wrapper
    width: 90%

.twit__head
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center

.userpic
  display: flex
  height: 49px
  width: 49px
  border-radius: 50%

.nickname

  margin-left: 5px
  width: 100%
  height: 100%

.name
  font-weight: bold

.login
  color: rgb(101, 119, 134)

.twit-content
  font-weight: 400
  font-size: 23px

</style>

<script>
export default {
  
}
</script>
