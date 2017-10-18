$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "https://www.reddit.com/r/worldnews.json",
    contentType: "application/json",
    data: JSON.parse()
  }).then(function(success) {
      var posts = configureResponse(success);

      posts.forEach(function(post) {
          var container = document.createElement('div');
          var heading = document.createElement('h2');
          var a = document.createElement('a');
          var image = document.createElement('img');

          heading.innerText = post.title;
          image.setAttribute('src', formatSrc(post));
          a.setAttribute('href', 'single.html?url=' + post.permalink);
          a.appendChild(heading);
          container.appendChild(a);
          container.appendChild(image);
          document.body.appendChild(container);
      });

  });
});











/*
function getData(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data) {
    let todos = JSON.parse(data);
    let output = '';
    for(let todo of todos){
      output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
        </li>
      `;
    }

    document.getElementById('template').innerHTML = output;
    // console.log(data);
}).catch(function(err) {
    console.log(err);
});
*/


/*
$.get('https://www.reddit.com/r/funny.json')
.then(function(success) {
    var posts = configureResponse(success);

    posts.forEach(function(post) {
        var container = document.createElement('div');
        var heading = document.createElement('h2');
        var a = document.createElement('a');
        var image = document.createElement('img');

        heading.innerText = post.title;
        image.setAttribute('src', formatSrc(post));
        a.setAttribute('href', 'single.html?url=' + post.permalink);
        a.appendChild(heading);
        container.appendChild(a);
        container.appendChild(image);
        document.body.appendChild(container);
    });
});

function configureResponse(data) {
    var children = data.data.children;

    return children.map(function(child, i) {
        var post = {};
        post.thumbnail = child.data.thumbnail;
        post.title = child.data.title;
        post.url = child.data.url;
        post.permalink = child.data.permalink;

        return post;
    });
}

function formatSrc(post) {
    if (/\.(gif|.gifv|jpg|jpeg|tiff|png)$/i.test(post.url)) {
        if (post.url.indexOf('.gifv') != -1) {
            return post.url.replace('.gifv', '.gif');
        }

        return post.url;
    }

    return post.thumbnail;
}
*/
