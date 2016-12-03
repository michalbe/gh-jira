'use strict';
/* global document */
var linker = function() {
  var url = 'https://meetsoci.atlassian.net/browse/';
  var titleDOM = document.querySelector('.js-issue-title');
  var title = titleDOM.innerHTML;
  console.log('dom', titleDOM);
  console.log('title', title);
  title = title.replace(/(SO-\d+)/gi, function(title) {
    return '<a href=' + url + title + ' class="jira-link">' + title + '</a>';
  });

  console.log('title next', title);
  titleDOM.innerHTML = title;
};

document.addEventListener('load', linker);
