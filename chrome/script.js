'use strict';
/* global document */
var linker = (function() {
  var url = 'https://meetsoci.atlassian.net/browse/';
  var init = function() {
    var titleDOM = document.querySelector('.js-issue-title');
    var title = titleDOM.innerHTML;
    title = title.replace(/(SO-\d+)/gi, function(title) {
      return '<a href=' + url + title + ' class="jira-link">' + title + '</a>';
    });

    titleDOM.innerHTML = title;
  };

  return {
    init: init
  };
})();

document.addEventListener('load', linker.init);
