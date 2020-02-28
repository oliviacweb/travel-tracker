import $ from 'jquery';
const domFunctionality = {
  validateUser: (event, dataObj) => {
    dataObj.travelersData.forEach(traveler => {
      let userIdentification = $('.user').val();
      let userPassword = $('.pword').val();
      if(userIdentification === 'agency' && userPassword === 'travel2020') {
        console.log('agent')
      }
      else if(userIdentification === `traveler${traveler.id}` && userPassword === 'travel2020') {
        console.log('heyo')
      }
    })
  }
}
export default domFunctionality;
