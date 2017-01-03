'use strict';

const CONFIG = {
  jira_url: 'https://your_company.atlassian.net/browse/',
  ticket_label: 'JIRA'
}

/* global document */
const linker = () => {
  const titleDOM = document.querySelector('.js-issue-title');

  if (titleDOM) {
    const title = titleDOM.innerText;

    title = title.replace(new RegExp(`${CONFIG.ticket_label}\\d+`, 'gi'), title => {
      return `
      <a
        href=${CONFIG.jira_url + title}
        class="jira-link"
        target="_blank"
      >${title}</a>`;
    });

    titleDOM.innerHTML = title;
  }
};


linker();

document
  .querySelector('div.progress')
  .addEventListener('transitionend', linker);
