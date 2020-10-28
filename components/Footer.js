app.component('footer-attribution', {
    template: 
    /*html*/
    `<div class="attribution">
    Challenge by
    <a :href='frontendUrl' target="_blank">Frontend Mentor</a>. 
    Coded by <a :href='myWebsite'>{{ myName }}</a>.
  </div>`,

  data() {
    return {
        frontendUrl: 'https://www.frontendmentor.io?ref=challenge',
        myWebsite: 'https://www.nityagulati.com',
        myName: 'Nitya Gulati'
      }
  }
})