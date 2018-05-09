let sources = {
  'default-src': ['\'self\''],
  'script-src': ['\'self\'','https://*.myexternalcdn.com'],
  'frame-src': ['https://someexternalframesource.com'],
  'img-src': ['\'self\'', 'https:', 'data:'],
  'style-src': ['\'self\'', 'https:'],
  'font-src': ['\'self\'', 'https:'],
  'connect-src': ['\'self\''],
}

let csp = Object.keys(sources).map(function(key){
  return `${key} ${sources[key].join(' ')};`
})

export default function(req, res, next){
  res.setHeader('Content-Security-Policy', csp.join(' '))
  next()
}
