var renderElems = function(elems, opts) {
  for (let i = 0; i < elems.length; i++) {
    var math = elems[i]
    math.innerHTML = katex.renderToString(math.textContent, opts)
    math.classList.remove('hidden')
  }
}

var renderMathInElements = function(elems, options) {
  if (!elems) {
    throw new Error('No element provided to render')
  }

  var opts = {}

  // Object.assign(optionsCopy, option)
  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      opts[option] = options[option]
    }
  }

  // default options
  opts.errorCallback = opts.errorCallback || console.error

  // Enable sharing of global macros defined via `\gdef` between different
  // math elements within a single call to `renderMathInElement`.
  opts.macros = opts.macros || {}

  renderElems(elems, opts)
}
