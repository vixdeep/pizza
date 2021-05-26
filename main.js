menu_list_array = ["cheese","pepperoni"]
function getmenu(){
    var htmldata;
    htmldata = "<ol class = 'menulist'>";
    menu_list_array.sort();
    for(var i = 0;i<menu_list_array.length;i++){
        htmldata = htmldata+'<li>'+ menu_list_array[i] + '</li>'
    }
    htmldata=html+'</ol>'
    documeht.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    meny_list_array.sort();
    htmldata = "<sectipn class = 'cards>"
    for(var i =0;i<menu_list_array.length;i++){
        htmldata = htmldata+'<div class = "card">' +'<img src = "images/pizzaImg.png"/>'+ mwnu_list_array[i]
    }
    htmldata = htmldata+'</section>'
    dpcument.getElementById("display_addedmenu").innerHTML = htmldata;
}