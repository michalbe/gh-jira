# GH -> Jira SOCI

This Mozilla Firefox/Google Chrome Add-on changes ticket numbers in PRs' titles to links to proper Jira tickets.

![How it works?](images/how.gif)

## Instalation

  - Clone/download this repo

### Google Chrome

  - Go to [chrome://extensions/](chrome://extensions/)
  - Click `Load unpacked exptension`
  - Choose the folder where `gh-jira-soci` was downloaded
  - Go to [https://github.com/meetsoci/soci/pulls](https://github.com/meetsoci/soci/pulls) and refresh

![Google Chrome](images/chrome.png)

### Mozilla Firefox

  - Go to `about:debugging` page
  - Click `Load Temporary Add-on`
  - Choose the `manifest.json` file from the downloaded repo
  - Go to [https://github.com/meetsoci/soci/pulls](https://github.com/meetsoci/soci/pulls) and refresh
  - Note that this will work only till Firefox will be restarted (what probably doesn't occur often for we developers)

![Mozilla Firefox](images/firefox.png)
