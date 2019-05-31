$(function () {
    console.log('onLoad');
    $root = $('.root');
    $.get('https://jsonplaceholder.typicode.com/posts', function (posts) {
        posts.forEach(function (post) {
            $root.append('<p>' + post.id + '. ' + post.title + '</p>');
        });
    });
    console.log('response');
});