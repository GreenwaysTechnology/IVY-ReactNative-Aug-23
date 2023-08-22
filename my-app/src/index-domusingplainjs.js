//create dom element using plain javascript .
function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React!'
    //insert into index.html inside body and div having id called root 
    document.getElementById('root').appendChild(Heading)
}
createElement()