var b=document.getElementById('ul')
function addItem(){
	var a=document.getElementById('inp')
	if(a.value==""){
		alert("Enter Value")
	}
	else{
	var li=document.createElement('li')
	var lit=document.createTextNode(inp.value)
	li.setAttribute("class","li")
	li.appendChild(lit)
	var del=document.createElement("button")
	var delt=document.createTextNode("DELETE")
	del.appendChild(delt)
	b.appendChild(li)
	li.appendChild(del)
	del.setAttribute("onclick","del(this)")
	del.setAttribute("class","del")
	var edit=document.createElement("button")
	var editt=document.createTextNode("EDIT")
	edit.appendChild(editt)
	li.appendChild(edit)
	edit.setAttribute("onclick","edit(this)")
	edit.setAttribute("class","edit")
	a.value=""
	console.log(li)
	}
}
function edit(e){
	var editvalue=prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
	e.parentNode.firstChild.nodeValue=editvalue;
}
function del(e){
	e.parentNode.remove()
}
function deleteall(){
	ul.innerHTML=""
}
