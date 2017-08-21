function openbox(id){
  var display = document.getElementById(id).style.display;
   if(display=='none'||display==""){
      document.getElementById(id).style.display='block';
   }
}

function hidebox(id){
  var display = document.getElementById(id).style.display;
   if(display=='block'){
      document.getElementById(id).style.display='none';
   }
}

function change_icon(icon_path, id) {
	document.getElementById(id).src=icon_path;
}
