import axios from 'axios';
import '../style.css';

let todolist = document.querySelector('.todolist');
let btn = document.querySelector('.todolist');

const genrateElement = ({title, body}) => {
    let ele = document.createElement('div');
    ele.classList = '.todo-item';
    ele.innerHTML = `
        <div class="title">${title}</div>
        <p class="body">${body}</p>
        <button class="btn">press me</button>
    `;
    todolist.append(ele);
}

const gettodos = async () => {
    let {data} = await axios('https://jsonplaceholder.typicode.com/posts');
    data.map(todo => {
        genrateElement(todo);
    });
}

gettodos();
