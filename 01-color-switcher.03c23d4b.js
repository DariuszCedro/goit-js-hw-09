const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let s=null;t.addEventListener("click",(function(){s=setInterval((function(){o.setAttribute("style",`background:#${Math.floor(16777215*Math.random()).toString(16)}`)}),1e3)})),t.addEventListener("click",(function(){t.classList.add(".is-active"),t.setAttribute("disabled",!0),e.classList.remove(".is-active"),e.removeAttribute("disabled"),console.log(t),console.log(e)})),e.addEventListener("click",(function(){e.classList.add(".is-active"),e.setAttribute("disabled",!0),t.classList.remove(".is-active"),t.removeAttribute("disabled"),clearInterval(s),console.log(t),console.log(e)}));
//# sourceMappingURL=01-color-switcher.03c23d4b.js.map