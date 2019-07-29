const request = require('axios')
const { checkStock } = require('./extractFromHtml')
const callback = (a) => console.log(a)

//exports.handler = async (event, context, callback) => {
  request('https://www.thenappylady.co.uk/all-in-one-nappies/blueberry-simplex-all-in-one-nappy.html')
  // request('https://www.thenappylady.co.uk/all-in-one-nappies/wizard-uno-staydry-all-in-one-nappy-by-motherease.html')
    .then(({data}) => {
      checkStock(data)
      callback(null, 'jjj')
    })
    .catch(callback)
//}

