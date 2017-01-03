'use strict';

const CONFIG = {
  jira_url: 'https://meetsoci.atlassian.net/browse/',
  ticket_label: 'SO-'
}

/* global document */
var linker = function() {
  var titleDOM = document.querySelector('.js-issue-title');

  if (titleDOM) {
    var title = titleDOM.innerText;

    title = title.replace(/(SO-\d+)/gi, function(title) {
      return '<a href=' + config.jira_url + title +
        ' class="jira-link" target="_blank">' + title +
        '</a>';
    });

    titleDOM.innerHTML = title;
  }
};


linker();

document
  .querySelector('div.progress')
  .addEventListener('transitionend', linker);
