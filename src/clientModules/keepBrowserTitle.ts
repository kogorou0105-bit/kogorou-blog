const siteTitle = 'Kogorou Blog';

function keepBrowserTitle() {
  if (document.title !== siteTitle) {
    document.title = siteTitle;
  }
}

if (typeof window !== 'undefined') {
  keepBrowserTitle();

  const observer = new MutationObserver(keepBrowserTitle);

  observer.observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

export {};
