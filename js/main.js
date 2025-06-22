
let elUsersList = document.querySelector(".users-list")
let elPostsList = document.querySelector(".posts-list")
let elCommentsList = document.querySelector(".comments-list")


// loading fn
function loading (list){
    list.innerHTML = `
    <li>
    <img class=" mx-auto w-[50px] !mt-[50px] h-[50px]" src="./images/loading.png" alt="loading photo""/>
    </li>
    `
}
// loading fn

// users part
const getUsers = (url) => {
    loading(elUsersList)
    fetch (url).then(res => res.json()).then(data => renderUsers(data, elUsersList))
}

function renderUsers(usersList, saveList){
     saveList.innerHTML = null
     usersList.forEach(item => {
        let elItem = document.createElement("li")
         elItem.className = " cursor-pointer w-[80%] flex p-1 bg-slate-200  rounded-md items-center   mx-auto"
        elItem.innerHTML = `
                 <div class="flex items-center gap-[20px]">
                     <img class="ml-[7px] w-[70px] h-[70px] rounded-full" src="./images/random.jpg" alt="user img" width="70" height="70">
                     <div>
                         <h1 class="text-[16px] font-semibold ${item.name} (${item.username})"> </h1>
                         <p class="text-[14px]">${item.email}</p>
                     </div>
                 </div>
                 <button>
                     <img src="./images/dots.svg" alt="dots img" width="30" height="30">
                 </button>
         `
        saveList.appendChild(elItem)

        elItem.addEventListener("click", () => {
         getPostById(item.id)
         loading(elPostsList)
        })
     })
}
 getUsers ("https://jsonplaceholder.typicode.com/users")
// users part end 


//posts part
function getPostById(id){
   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
       renderPosts(data, elPostsList)
   })
}
function renderPosts(postList, saveList){
     saveList.innerHTML = null
     postList.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "post-item left-[7px] right-[3px] post-item  mx-auto  w-[85%]  p-2 bg-[#3670a7] text-white relative  rounded-[15px] text-[15px]"
        elItem.innerHTML = `
             <h2>${item.title}</h2>
             <P>${item.body}</P>
        `
       
        saveList.appendChild(elItem)
     })
}
// posts list





