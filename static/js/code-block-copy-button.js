 window.addEventListener('load', function() {
  const COPY_BUTTON_TEXT_LABEL = 'Copy';
  const COPY_BUTTON_SUCCESS_TEXT_LABEL = 'Copied!';
  const CODE_BLOCK_SELECTOR = '.hljs';

  function addCopyButtons(codeBlockSelector, copyButton) {
    document.querySelectorAll(codeBlockSelector).forEach(function(codeBlock) {
      codeBlock.parentNode.appendChild(copyButton.cloneNode(true));
    });
  }

  function createCopyButton() {
    const copyButton = document.createElement('button');
    copyButton.classList.add('copyCodeButton');
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.setAttribute('type', 'button');

    copyButton.innerHTML =
      '<div class="copyCodeButtonBody">' +
        '<svg width="12" height="12" viewBox="340 364 14 15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M342 375.974h4v.998h-4v-.998zm5-5.987h-5v.998h5v-.998zm2 2.994v-1.995l-3 2.993 3 2.994v-1.996h5v-1.995h-5zm-4.5-.997H342v.998h2.5v-.997zm-2.5 2.993h2.5v-.998H342v.998zm9 .998h1v1.996c-.016.28-.11.514-.297.702-.187.187-.422.28-.703.296h-10c-.547 0-1-.452-1-.998v-10.976c0-.546.453-.998 1-.998h3c0-1.107.89-1.996 2-1.996 1.11 0 2 .89 2 1.996h3c.547 0 1 .452 1 .998v4.99h-1v-2.995h-10v8.98h10v-1.996zm-9-7.983h8c0-.544-.453-.996-1-.996h-1c-.547 0-1-.453-1-.998 0-.546-.453-.998-1-.998-.547 0-1 .452-1 .998 0 .545-.453.998-1 .998h-1c-.547 0-1 .452-1 .997z" fill-rule="evenodd"></path></svg>' +
        '<span class="copyCodeButtonText">' + COPY_BUTTON_TEXT_LABEL + '<span>' +
      '</div>';
    return copyButton;
  }

  addCopyButtons(CODE_BLOCK_SELECTOR, createCopyButton());

  const clipboard = new ClipboardJS('.copyCodeButton', {
    text: function(trigger) {
      // Remove `$` sign for clipboard copy
      const codeElement = trigger.parentNode.querySelector('code');
      const codeLines = codeElement.querySelectorAll('.hljs-ln-code');
      const code = (codeLines.length <= 1) ?
          codeElement.textContent :
          [...codeLines].reduce((carry, codeLine) => `${carry + codeLine.textContent}\n`, '');

      return code.replace(/^\$\s/gm, '').trim();
    }
  });

  clipboard.on('success', function(event) {
    event.clearSelection();
    const copyButtonTextElement = event.trigger.querySelector('.copyCodeButtonText');
    
    copyButtonTextElement.textContent = COPY_BUTTON_SUCCESS_TEXT_LABEL;
    setTimeout(function() {
      copyButtonTextElement.textContent = COPY_BUTTON_TEXT_LABEL;
    }, 2000);
  });
});