import $ from 'jquery';
const domFunctionality = {
  validateUser: (event, dataObj) => {
    dataObj.travelersData.forEach(traveler => {
      let userIdentification = $('.user').val();
      let userPassword = $('.pword').val();
      if(userIdentification === 'agency' && userPassword === 'travel2020') {
        $('.main-page').html('<h1>Hello, agent<h1>')
      }
      else if(userIdentification === `traveler${traveler.id}` && userPassword === 'travel2020') {
        $('.main-page').html(`<h1>Hello, ${traveler.name}<h1>`)
      }
    })
  }
}
export default domFunctionality;
