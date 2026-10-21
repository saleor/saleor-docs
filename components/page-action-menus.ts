const dropdownSelector =
  '[data-blume-page-actions] details[data-blume-dropdown]';
const viewportMargin = 8;

function placeMenu(dropdown: HTMLDetailsElement) {
  const trigger = dropdown.querySelector('summary');
  const menu = dropdown.querySelector<HTMLElement>('[data-blume-menu]');
  if (!trigger || !menu) return;

  const bounds = trigger.getBoundingClientRect();
  if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
    dropdown.open = false;
    return;
  }

  const spaceBelow = window.innerHeight - bounds.bottom - viewportMargin * 2;
  const spaceAbove = bounds.top - viewportMargin * 2;
  Object.assign(menu.style, {
    position: 'fixed',
    inset: 'auto',
    margin: '0',
    minWidth: 'min(14rem, calc(100vw - 16px))',
    maxWidth: 'min(22rem, calc(100vw - 16px))',
    maxHeight: `${Math.max(spaceAbove, spaceBelow, 0)}px`,
    overflowY: 'auto',
  });

  const { width, height } = menu.getBoundingClientRect();
  const openAbove = height > spaceBelow && spaceAbove > spaceBelow;
  const left = Math.max(
    viewportMargin,
    Math.min(bounds.right - width, window.innerWidth - width - viewportMargin),
  );
  const top = openAbove
    ? bounds.top - height - viewportMargin
    : bounds.bottom + viewportMargin;

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

export function installPageActionMenus() {
  let pendingFrame = 0;
  const schedulePlacement = () => {
    if (pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => {
      pendingFrame = 0;
      document
        .querySelectorAll<HTMLDetailsElement>(`${dropdownSelector}[open]`)
        .forEach(placeMenu);
    });
  };

  document.addEventListener(
    'toggle',
    (event) => {
      const dropdown = event.target;
      if (
        dropdown instanceof HTMLDetailsElement &&
        dropdown.open &&
        dropdown.matches(dropdownSelector)
      ) {
        placeMenu(dropdown);
      }
    },
    true,
  );
  document.addEventListener('scroll', schedulePlacement, true);
  window.addEventListener('resize', schedulePlacement);
}
