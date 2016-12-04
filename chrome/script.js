'use strict';
/* global document */
var linker = function() {
  var url = 'https://meetsoci.atlassian.net/browse/';
  var titleDOM = document.querySelector('.js-issue-title');

  if (titleDOM) {
    var title = titleDOM.innerText;
    title = title.replace(/(SO-\d+)/gi, function(title) {
      return '<a href=' + url + title + ' class="jira-link" target="_blank">' + title + '</a>';
    });

    titleDOM.innerHTML = title;
  }
};


linker();

document
  .querySelector('div.progress')
  .addEventListener('transitionend', linker);
