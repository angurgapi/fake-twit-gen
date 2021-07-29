<template>
  <main class="main">
    <h2 class='page-title'>Write, take a screenshot & crop</h2>
   
    <div class="twit-wrapper">
    <div class='twit'>
      <div class='twit__head'>
        <img class="twit__userpic" :src="`${avatarUrl}`">
  
        <div class='twit__nickname'>
          <div class="twit__name">{{ twitAuthor }}</div>
          <p class="twit__login">@{{ twitLogin }}</p>
        </div>
      </div>
      <div class='twit__text'>
        <span class="twit__content">{{ twitContent }}</span>
      </div>
      <div class="twit__timedate">
        <ul>
          <li class="twit__time">{{ twitTime }}</li>
          <li>·</li>
          <li class="twit__date">{{ twitDate }}</li>
          <li>·</li>
          <li class="twit__version">{{ twitVersion }}</li>
        </ul>
      </div>
    </div>
    </div>

    <Form />
  </main>
</template>

<script>
export default {
  data(){
    return {
      avatarUrl: 'https://icdn.lenta.ru/images/2019/12/06/10/20191206104306174/pwa_vertical_1280_4c9fd519bc66e04b4a6eb24307a025ad.jpg',
      twitAuthor: 'Elon Musk',
      twitLogin: 'elonmusk',
      twitContent: 'Hehe welcome to my Twitter',
      twitTime: '12:01 AM',
      twitDate: 'Jul 21, 2020',
      twitVersion: 'Twitter for Android',
    }
  }  
}
</script>

<style scoped lang="sass">
.page-title
  max-width: 90%
  margin-top: 30px
  font-size: 32px
  text-align: center
  color: rgba(255,255,255,.8)

.twit-wrapper
  margin-top: 30px
  width: 600px
  max-width: 90%
  @include flexcolcent

.twit
  margin: 20px
  padding: 10px
  display: flex
  flex-direction: column
  width: 100%
  background-color: #fff
  &__head 
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
  &__userpic
    display: flex
    height: 49px
    width: 49px
    border-radius: 50%
  &__nickname
    margin-left: 5px
    width: 100%
    height: 100%
  &__name 
    font-weight: bold
  &__login
    color: $twigrey
  &__text
    margin-top: 10px
  &__content
    font-weight: 400
    font-size: 23px
  &__time, &__date
    color: $twigrey
  &__version 
    color: $twiblue

  &__timedate
    margin-top: 10px
    ul
      display: flex
      flex-direction: row
      list-style: none
      padding-left: 0
      border-bottom: 0 solid rgb(0,0,0)
      li
        margin-right: 4px

</style>


