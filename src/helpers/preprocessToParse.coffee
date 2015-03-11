module.exports = (targets, destBoolean) ->
  _props = targets.split ' '

  _toParse = []
  for prop in _props
    _toParse.push "#{prop} = #{destBoolean};"
  return _toParse.join('')
