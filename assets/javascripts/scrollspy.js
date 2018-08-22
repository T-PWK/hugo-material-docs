// var headers = document.getElementsByTagName('h2')
// var scrollspy = document.getElementById('scrollspy')

// if (scrollspy) {
//   if (headers.length > 0) {
//     for (var i = 0; i < headers.length; i++) {
//       var li = document.createElement('li')
//       li.setAttribute('class', 'anchor')

//       var a = document.createElement('a')
//       a.setAttribute('href', '#' + headers[i].id)
//       a.setAttribute('title', headers[i].innerHTML)
//       a.innerHTML = headers[i].innerHTML

//       li.appendChild(a)
//       scrollspy.appendChild(li)
//     }
//   } else {
//     scrollspy.parentElement.removeChild(scrollspy)
//   }

//   /* Add permanent link next to the headers */
//   var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6')

//   for (var i = 0; i < headers.length; i++) {
//     var a = document.createElement('a')
//     a.setAttribute('class', 'headerlink')
//     a.setAttribute('href', '#' + headers[i].id)
//     a.setAttribute('title', 'Permanent link')
//     a.innerHTML = "{{ .Site.Params.permalink | default "¶" }}"
//     headers[i].appendChild(a)
//   }
// }
var headers=document["getElementsByTagName"]("h2");var scrollspy=document["getElementById"]("scrollspy");if(scrollspy){if(headers["length"]> 0){for(var i=0;i< headers["length"];i++){var li=document["createElement"]("li");li["setAttribute"]("class","anchor");var a=document["createElement"]("a");a["setAttribute"]("href","#"+ headers[i]["id"]);a["setAttribute"]("title",headers[i]["innerHTML"]);a["innerHTML"]= headers[i]["innerHTML"];li["appendChild"](a);scrollspy["appendChild"](li)}}else {scrollspy["parentElement"]["removeChild"](scrollspy)};var headers=document["querySelectorAll"]("h1, h2, h3, h4, h5, h6");for(var i=0;i< headers["length"];i++){var a=document["createElement"]("a");a["setAttribute"]("class","headerlink");a["setAttribute"]("href","#"+ headers[i]["id"]);a["setAttribute"]("title","Permanent link");a["innerHTML"]= "{{ .Site.Params.permalink | default "¶" }}";headers[i]["appendChild"](a)}}