const cheerio = require('cheerio');

function checkStock (html) {
  const parsedHtml = cheerio.load(html);

  parsedHtml('script').each(function(i, el) {
    const children = parsedHtml(el).get()[0].children
    if (children.length > 0) {
      const text = parsedHtml(el).get()[0].children[0].data
        if (text.includes('variants')) {
          if (text.includes('in stock, ready to go')) {
            console.log('found some')
          }
        }
      console.log(parsedHtml(el).get()[0].children[0].data.includes('x'))
    }
  })
}

module.exports = {
  checkStock
}

