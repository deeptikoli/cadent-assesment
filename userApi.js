
const userApi = (threshold) => {
    fetch('https://jsonmock.hackerrank.com/api/article_users')
                .then(response => response.json())
                .then(data => console.log(data));
                console.log(data);
    return data;
}

console.log(userApi('3000'));