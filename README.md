[![Code Climate](https://codeclimate.com/repos/5731730271bcda1fe4005f60/badges/7cff06c8a6bb0de83215/gpa.svg)](https://codeclimate.com/repos/5731730271bcda1fe4005f60/feed)

# urls-test-task

Simple todo-like test task.

### See demo here: [urls.alexkalinin.pro](http://urls.alexkalinin.pro/)

### See this project screencast on YouTube:
<a href="https://youtu.be/FwAvaRYmnAg" target="_blank">
   <img alt="see on youtube" src="_preview/GithubVideoPreview.png"/>
</a>

### Used tools:
* jquery
* alfa-domains.js
* rails 4

### Preview
![preview](_preview/preview.png)


### Block domains:

created functionality for black listing some domains by regex:

```ruby
# on server
# RAILS_ENV=production rails c

BlackList.create url: "blockKeyword"
```
