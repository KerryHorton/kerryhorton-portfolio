// kerry-cursor.js — organic "pebble" cursor with magnetic case-study rows
// and soft pink text-link halos. Vanilla; safe to load on every page.
(function () {
  // Only on devices with a real, precise pointer. Touch keeps the native cursor.
  var mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!mq.matches) return;

  function init() {
    var dot = document.createElement('div');
    dot.id = 'kcursor';
    dot.setAttribute('aria-hidden', 'true');
    dot.style.opacity = '0'; // hidden until the first move
    document.body.appendChild(dot);

    var mx = window.innerWidth / 2, my = window.innerHeight / 2; // raw pointer
    var px = mx, py = my;        // rendered dot position (tracks the pointer exactly)
    var scale = 1, sTarget = 1;  // for the scale-down-and-vanish over a circle
    var rot = 0;
    var mode = 'dot';            // 'dot' | 'text' | 'hidden'
    var halo = null;             // {cx, cy} target when over a text link
    var magnetThumb = null;      // currently pulled .thumb element

    // Text targets that earn the soft halo: real links + nav headers
    // (exclude project rows and the brand mark — they have their own behavior).
    var TEXT_SEL = 'a:not(.proj):not(.brand)';

    function clearMagnet() {
      if (magnetThumb) { magnetThumb.style.transform = ''; magnetThumb = null; }
    }

    function setMode(m) {
      if (m === mode) return;
      mode = m;
      dot.classList.toggle('is-text', m === 'text');
      sTarget = (m === 'hidden') ? 0 : 1;
      if (m !== 'text') { dot.style.width = ''; dot.style.height = ''; }
    }

    function enterText(link) {
      var r = link.getBoundingClientRect();
      halo = { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
      dot.style.width = (r.width + 22) + 'px';
      dot.style.height = (r.height + 10) + 'px';
      setMode('text');
    }

    function handleProj(proj) {
      var thumb = proj.querySelector('.thumb');
      if (!thumb) { clearMagnet(); setMode('dot'); return; }
      var r = thumb.getBoundingClientRect();
      if (!r.width) { clearMagnet(); setMode('dot'); return; }
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var dx = mx - cx, dy = my - cy;
      var dist = Math.hypot(dx, dy);
      if (dist < r.width / 2 + 14) {
        // Inside the pink circle: dot vanishes, circle drifts toward cursor.
        var k = 0.26;
        thumb.style.transform = 'translate(' + (dx * k) + 'px, calc(-50% + ' + (dy * k) + 'px))';
        magnetThumb = thumb;
        setMode('hidden');
      } else {
        clearMagnet();
        setMode('dot');
      }
    }

    window.addEventListener('pointermove', function (e) {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      mx = e.clientX; my = e.clientY;
      // Unconditional (not gated to "first move only") so the dot also
      // reappears after being hidden by blur/mouseleave below — otherwise
      // it stays hidden forever after the first tab-away/back.
      dot.style.opacity = '';
      var t = e.target;
      if (t && t.tagName === 'IFRAME') {
        // Embedded content (e.g. the résumé PDF) is a separate browsing
        // context: once the pointer is over it we stop getting move events
        // and its native cursor takes over, so shrink ours away instead of
        // leaving it frozen at the iframe's edge.
        clearMagnet();
        setMode('hidden');
        return;
      }
      var proj = t && t.closest ? t.closest('.proj') : null;
      if (proj) { handleProj(proj); return; }
      clearMagnet();
      var link = t && t.closest ? t.closest(TEXT_SEL) : null;
      if (link) { enterText(link); } else { setMode('dot'); }
    }, { passive: true });

    // Hide when the pointer leaves the window entirely, and restore it as
    // soon as the tab/window regains focus (don't wait for the next move).
    document.addEventListener('mouseleave', function () { dot.style.opacity = '0'; });
    window.addEventListener('blur', function () { dot.style.opacity = '0'; });
    window.addEventListener('focus', function () { dot.style.opacity = ''; });

    function frame() {
      // Position tracks the real pointer (or halo center) exactly, every
      // frame — no easing toward it, so there's no perceptible lag.
      if (mode === 'text' && halo) { px = halo.cx; py = halo.cy; }
      else { px = mx; py = my; }
      scale += (sTarget - scale) * 0.2;
      rot += 0.4;
      var r = (mode === 'text') ? 0 : rot;
      dot.style.transform = 'translate(' + px + 'px,' + py + 'px) translate(-50%,-50%) rotate(' + r + 'deg) scale(' + scale + ')';
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
