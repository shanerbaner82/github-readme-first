(() => {
  'use strict';

  let hasMovedReadme = false;

  const findCommonAncestor = (el1, el2) => {
    let current = el1;
    while (current) {
      if (current.contains(el2)) return current;
      current = current.parentElement;
    }
    return null;
  };

  const moveReadmeAboveCode = () => {
    if (hasMovedReadme) return;

    const fileTable = document.querySelector('table[aria-labelledby="folders-and-files"]');
    if (!fileTable) return;

    const readmeArticle = document.querySelector('article.markdown-body');
    if (!readmeArticle) return;

    const commonAncestor = findCommonAncestor(readmeArticle, fileTable);
    if (!commonAncestor) return;

    const children = Array.from(commonAncestor.children);
    let readmeChild = null;
    let fileChild = null;

    for (const child of children) {
      if (child.contains(readmeArticle) || child === readmeArticle) readmeChild = child;
      if (child.contains(fileTable) || child === fileTable) fileChild = child;
    }

    if (!readmeChild || !fileChild || readmeChild === fileChild) return;

    const readmeIndex = children.indexOf(readmeChild);
    const fileIndex = children.indexOf(fileChild);

    if (readmeIndex > fileIndex) {
      commonAncestor.insertBefore(readmeChild, fileChild);
      hasMovedReadme = true;
    }
  };

  let timeout;
  const debouncedMove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(moveReadmeAboveCode, 150);
  };

  const resetAndMove = () => {
    hasMovedReadme = false;
    debouncedMove();
  };

  debouncedMove();

  const observer = new MutationObserver(debouncedMove);
  const target = document.querySelector('main') || document.body;
  observer.observe(target, {
    childList: true,
    subtree: true
  });

  document.addEventListener('turbo:load', resetAndMove);
  document.addEventListener('turbo:render', resetAndMove);
  document.addEventListener('pjax:end', resetAndMove);
})();
