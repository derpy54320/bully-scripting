var sorted = 0;
var direction = false;
function getSortIndex(headerElement){
	var fields = headerElement.parentElement.children;
	var index = fields.length;
	while(index)
		if(fields[--index] == headerElement)
			return index;
}
function getSortContainer(headerElement){
	while(headerElement && headerElement.className != "sortable_container")
		headerElement = headerElement.parentElement;
	return headerElement;
}
function shouldSortByNumber(rows,sort_index){
	var i;
	for(i = 0;i < rows.length;i++)
		if(isNaN(parseInt(rows[i].children[sort_index].innerHTML)))
			return false;
	return true;
}
function sortByTableElement(container,sort_index,sort_descending){
	var index;
	var table = container.getElementsByClassName("sortable_body")[0];
	var rows = table.children;
	var numbers = shouldSortByNumber(rows,sort_index);
	for(index = 0;index < rows.length;index++){
		var i = index;
		var x = table.removeChild(rows[index]);
		if(numbers){
			var num = parseInt(x.children[sort_index].innerHTML);
			if(sort_descending){
				while(i && num > parseInt(rows[i-1].children[sort_index].innerHTML))
					i--;
			}else{
				while(i && num < parseInt(rows[i-1].children[sort_index].innerHTML))
					i--;
			}
		}else{
			var str = x.children[sort_index].innerHTML.toLowerCase();
			if(sort_descending){
				while(i && str > rows[i-1].children[sort_index].innerHTML.toLowerCase())
					i--;
			}else{
				while(i && str < rows[i-1].children[sort_index].innerHTML.toLowerCase())
					i--;
			}
		}
		if(i == rows.length)
			table.appendChild(x);
		else
			table.insertBefore(x,rows[i]);
	}
}
function applySortIndicator(container,sort_index,sort_descending){
	var fields = container.getElementsByClassName("sortable_head")[0].children;
	var up_arrow = container.getElementsByClassName("sort_arrow_up")[0];
	var down_arrow = container.getElementsByClassName("sort_arrow_down")[0];
	if(sort_descending)
		fields[sort_index].appendChild(down_arrow.parentElement.removeChild(down_arrow));
	else
		fields[sort_index].appendChild(up_arrow.parentElement.removeChild(up_arrow));
	up_arrow.style.visibility = sort_descending ? "hidden" : "visible";
	down_arrow.style.visibility = sort_descending ? "visible" : "hidden";
}
function sortBy(){
	var index = getSortIndex(this);
	var parent = getSortContainer(this);
	if(index == sorted)
		direction = !direction;
	else
		direction = false;
	sorted = index;
	sortByTableElement(parent,0,false);
	sortByTableElement(parent,index,direction);
	applySortIndicator(parent,index,direction);
}
function initSortable(){
	var headers = document.getElementsByClassName("sortable_head");
	var index,i;
	for(index = 0;index < headers.length;index++){
		var header = headers[index].children;
		for(i = 0;i < header.length;i++)
			header[i].addEventListener("click",sortBy);
	}
}