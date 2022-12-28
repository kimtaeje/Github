const form  = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//localstorage에 저장할 배열
let todos =[];
const save = () =>{
    localStorage.setItem('todo',JSON.stringify(todos));//json->텍스트형식으로 보임
}


const delItem = (event) =>{
    const target = event.target.parentElement;//부모 li, 지워야하는 요소
    todos=todos.filter((todo)=>todo.id!==parseInt(target.id));//지우려는 요소가 아닌 것들만 모아서 다시 그 값을 todo값에저장
    save();
    target.remove();
};

const addItem = (todo) =>{
    if(todo.text!==''){//엔터눌러도 공백 출력x
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText=todo.text;//사용자 작성text
        button.innerText ='삭제';
        button.addEventListener('click',delItem);
        
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);//작성text 화면에 출력
        li.id = todo.id;
    }

};

const handler = (event) =>{
    event.preventDefault();//새로고침막기
    //새로운item을 하나의obj에 저장하기위해
    const todo={
        id:Date.now(),
        text:input.value,        
    };
todos.push(todo);
addItem(todo);//빈칸으로 초기화
save();
input.value ='';
};

form.addEventListener('submit',handler);

/*localStorage.setItem('hello','world');
const myData = localStorage.getItem('hello');*/