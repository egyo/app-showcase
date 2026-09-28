document.querySelectorAll('[data-share]').forEach((link) => {
  const name = link.dataset.share;
  const share = new URL('https://x.com/intent/tweet');
  share.searchParams.set('text', `${name} の紹介ページを見ました #${name}`);
  share.searchParams.set('url', window.location.href.split(/[?#]/)[0]);
  link.href = share.toString();
});
