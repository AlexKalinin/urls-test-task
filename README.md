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
