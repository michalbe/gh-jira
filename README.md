# GH -> Jira

This Mozilla Firefox/Google Chrome Add-on changes ticket numbers in PRs' titles to links to proper Jira tickets. I personally find it helpful when reviewing tasks, so I don't need to copy/paste anything.

![How it works?](images/how.gif)

## Instalation

  - Clone/download this repo

### Google Chrome

  - Go to `chrome://extensions/`
  - Click `Load unpacked exptension`
  - Choose the folder where `gh-jira` was downloaded
  - Go to your pull request page (usually something like `https://github.com/your_name/your_remo/pulls`) and refresh

![Google Chrome](images/chrome.png)

### Mozilla Firefox

  - Go to `about:debugging` page
  - Click `Load Temporary Add-on`
  - Choose the `manifest.json` file from the downloaded repo
  - Go to your pull request page (usually something like `https://github.com/your_name/your_remo/pulls`) and refresh
  - Note that this will work only till Firefox will be restarted (what probably doesn't occur often for us developers)

![Mozilla Firefox](images/firefox.png)
