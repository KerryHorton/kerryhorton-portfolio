/* kerry-resume.js — résumé viewer overlay. Exposes window.openResumeViewer().
   Embeds the résumé PDF with a download button. */
(function () {
  var PDF = "assets/Kerry-Horton-Resume.pdf";
  var DOWNLOAD_NAME = "Kerry-Horton-Resume.pdf";

  function build() {
    if (document.getElementById("kerry-resume")) return;
    var css = document.createElement("style");
    css.textContent =
      "#kerry-resume{position:fixed;inset:0;z-index:9000;display:none;align-items:center;justify-content:center;padding:clamp(16px,4vw,48px);" +
      "background:rgba(33,26,27,.62);backdrop-filter:blur(3px);opacity:0;transition:opacity .3s ease}" +
      "#kerry-resume.open{display:flex;opacity:1}" +
      "#kerry-resume .kr-panel{position:relative;width:100%;max-width:860px;height:100%;max-height:92vh;background:#F3EFE8;" +
      "border-radius:12px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 40px 100px -30px rgba(0,0,0,.5)}" +
      "#kerry-resume .kr-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 20px;border-bottom:1px solid rgba(33,26,27,.14);flex:none}" +
      "#kerry-resume .kr-title{font-family:'Instrument Serif',Georgia,serif;font-size:24px;line-height:1}" +
      "#kerry-resume .kr-title span{color:#fa8072}" +
      "#kerry-resume .kr-actions{display:flex;align-items:center;gap:10px}" +
      "#kerry-resume .kr-dl{font-family:'DM Mono',monospace;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;" +
      "padding:11px 18px;border-radius:100px;background:#211A1B;color:#F3EFE8;transition:background .25s}" +
      "#kerry-resume .kr-dl:hover{background:#fa8072}" +
      "#kerry-resume .kr-close{width:38px;height:38px;border-radius:50%;border:1px solid rgba(33,26,27,.24);background:transparent;" +
      "font-size:18px;line-height:1;color:#211A1B;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s}" +
      "#kerry-resume .kr-close:hover{border-color:#fa8072;color:#fa8072}" +
      "#kerry-resume .kr-body{flex:1;position:relative;background:#ECE6DB}" +
      "#kerry-resume iframe{width:100%;height:100%;border:0;display:block}" +
      "#kerry-resume .kr-fallback{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:40px;" +
      "font-family:'Hanken Grotesk',sans-serif;color:#6F6660}" +
      "#kerry-resume .kr-fallback .kr-dl{color:#F3EFE8}";
    document.head.appendChild(css);

    var el = document.createElement("div");
    el.id = "kerry-resume";
    el.innerHTML =
      '<div class="kr-panel" role="dialog" aria-modal="true" aria-label="Resume">' +
        '<div class="kr-bar">' +
          '<div class="kr-title">Resume<span>.</span></div>' +
          '<div class="kr-actions">' +
            '<a class="kr-dl" href="' + PDF + '" download="' + DOWNLOAD_NAME + '">Download \u2193</a>' +
            '<button class="kr-close" aria-label="Close">\u2715</button>' +
          '</div>' +
        '</div>' +
        '<div class="kr-body">' +
          '<div class="kr-fallback">Loading resume\u2026 if it doesn\u2019t appear, <a class="kr-dl" href="' + PDF + '" download="' + DOWNLOAD_NAME + '">download the PDF</a>.</div>' +
          '<iframe title="Resume" src="' + PDF + '#toolbar=0&navpanes=0"></iframe>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);

    function close() { el.classList.remove("open"); document.documentElement.style.overflow = ""; }
    el.querySelector(".kr-close").addEventListener("click", close);
    el.addEventListener("click", function (e) { if (e.target === el) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    return el;
  }

  window.openResumeViewer = function () {
    var el = document.getElementById("kerry-resume") || build();
    el.classList.add("open");
    document.documentElement.style.overflow = "hidden";
  };

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
