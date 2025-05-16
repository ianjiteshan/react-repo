
const mainContainer=document.querySelector("#root")

const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
     children:"Click to visit Google"
}
function customRender(element,container){
    /* 1st version-now we will create a loop based function
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    domElement.setAttribute("href",element.props.href)
    domElement.setAttribute("target",element.props.target)
    container.appendChild(domElement)
    */
   const domElement=document.createElement(element.type)
   domElement.innerHTML=element.children
   for (const prop in element.props) {
    if (prop=="children") continue;   
    domElement.setAttribute(prop,element.props[prop])     
    }
    container.appendChild(domElement)
   }

customRender(reactElement,mainContainer)

//this is how react works under the hood..creates a virtual dom tree and injects the elements