function applyLuaTypeTag(item,type,optional){
	var tag = document.createElement("span");
	if(optional){
		tag.innerHTML = "[" + type + "]";
		tag.title = "optional " + type;
	}else{
		tag.innerHTML = type;
		tag.title = type;
	}
	if(type == "boolean")
		tag.style.backgroundColor = "#A02020";
	else if(type == "number")
		tag.style.backgroundColor = "#0060C0";
	else if(type == "string")
		tag.style.backgroundColor = "#208020";
	else if(type == "table")
		tag.style.backgroundColor = "#C06000";
	else if(type == "function")
		tag.style.backgroundColor = "#20A080";
	else if(type == "userdata")
		tag.style.backgroundColor = "#8020C0";
	else if(type == "multret"){
		tag.style.backgroundColor = "#404040";
		tag.innerHTML = "[ . . . ]";
		tag.title = "multiple results";
	}else if(type == "vararg"){
		tag.style.backgroundColor = "#404040";
		tag.innerHTML = "[ . . . ]";
		tag.title = "extra arguments";
	}else if(type == "any"){
		tag.style.backgroundColor = "#404040";
		tag.title = optional ? "optional value" : "value";
	}
	tag.className = "lua_type";
	item.insertBefore(tag,item.childNodes[0]);
	/*
	if(optional){
		tag = document.createElement("span");
		tag.style.backgroundColor = "#606060";
		tag.className = "lua_type";
		tag.innerHTML = "(optional)";
		tag.title = "optional";
		item.insertBefore(tag,item.childNodes[1]);
	}
	*/
}
function applyLuaTypeTags(){
	["boolean","number","string","table","function","userdata","multret","vararg","any"].forEach(function(type){
		var elements = document.getElementsByClassName("lua_" + type);
		var count = elements.length;
		while(count)
			applyLuaTypeTag(elements[--count],type,false);
		elements = document.getElementsByClassName("lua_opt_" + type);
		count = elements.length;
		while(count)
			applyLuaTypeTag(elements[--count],type,true);
	});
}
function loadRealFunctionPage(name){
	if(isLuaFunction(name))
		document.getElementsByClassName("lua_tag_title")[0].style.visibility = "visible";
	else
		document.getElementsByClassName("lua_tag_title")[0].remove();
	if(isValidFunction(name)){
		var request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				var info = document.getElementById("func_info");
				if(request.status == 200){
					info.innerHTML = request.responseText;
					applyLuaTypeTags();
				}else if(request.status == 404)
					info.innerHTML = "<p>This function does not have any additional information.<br/>See <a href=\"/functions.html#conventions\">naming conventions</a> for help guessing how to use this function.</p>";
				else
					info.innerHTML = "<p>Failed to load function page. Try again by refreshing the page.</p>";
			}
		}
		request.open("GET","/functions/" + name + ".html");
		request.send();
		document.title = name;
		document.getElementById("func_name").innerHTML += name;
	}else{
		document.title = "Unknown Function";
		document.getElementById("func_name").innerHTML = "Unknown Function";
		document.getElementById("func_info").innerHTML = "<p>This function does not exist or is not documented. You can go back <a href=\"/\">home</a> if you got here by mistake.</p>";
	}
}
function setupRealFunctionPageDSL(name){
	if(name != ""){
		var div = document.getElementById(name);
		if(div){
			document.title = name;
			document.getElementById("func_name").innerHTML = name;
			document.getElementById("func_info").innerHTML = div.innerHTML;
		}else{
			document.title = "Unknown Function";
			document.getElementById("func_name").innerHTML = "Unknown Function";
			document.getElementById("func_info").innerHTML = "<p>This function does not exist or is not documented. You can go back <a href=\"/\">home</a> if you got here by mistake.</p>"
			+ "<p>Please note that not all DSL5 functions have been documented yet.</p>";
		}
	}else{
		var functions = document.getElementsByClassName("dsl_function");
		var content = document.getElementById("func_info");
		var count = functions.length;
		var sorted = [];
		while(count)
			sorted.push(functions[--count]);
		sorted.sort(function(a,b){
			return a.id.localeCompare(b.id);
		});
		document.getElementById("func_name").remove();
		content.innerHTML = "";
		for(var i = 0;i < sorted.length;i++){
			if(i)
				content.innerHTML += "<hr/>";
			content.innerHTML += "<h1>" + sorted[i].id + "</h1>" + sorted[i].innerHTML;
		}
	}
	(function(){
		var functions = document.getElementsByClassName("dsl_function");
		var count = functions.length;
		while(count)
			functions[--count].remove();
	})();
	(function(){
		var titles = document.getElementsByTagName("h1");
		var count = titles.length;
		while(count){
			var title = titles[--count];
			var version = getDslFunctionVersion(title.innerHTML);
			if(version){
				title.innerHTML = "<span class=\"dsl_version\" style=\"vertical-align: middle\">DSL" + version + "</span> " + title.innerHTML;
				title.title = "only available in DSL" + version + "+";
			}
		}
	})();
	applyLuaTypeTags();
}