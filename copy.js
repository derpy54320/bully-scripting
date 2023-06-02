function copyCode(button){
	if(!navigator.clipboard){
		var x = document.createElement("textarea");
		x.innerHTML = button.nextElementSibling.innerHTML;
		x.style.position = "fixed";
		x.style.left = "0px";
		x.style.top = "0px";
		document.body.appendChild(x);
		x.select();
		document.execCommand("copy");
		x.remove();
		return;
	}else
		navigator.clipboard.writeText(button.nextElementSibling.innerHTML);
}