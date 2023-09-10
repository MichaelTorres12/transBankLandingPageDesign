$(function(){

    let selectedButton = null; // Almacena el botón actualmente seleccionado

    $(".selectable-button").click(function() {
        // Verifica si se hizo clic en un botón diferente al seleccionado
        if (this !== selectedButton) {
            // Desmarca el botón previamente seleccionado (si existe)
            if (selectedButton) {
                $(selectedButton).removeClass("selected-button");
            }
            
            // Marca el botón clicado como seleccionado
            $(this).addClass("selected-button");
            selectedButton = this; // Actualiza el botón seleccionado
        }
    });

    //Show by default the first element
    $(".pccInfo").show(function(){
        $(".scInfo").hide();
        $(".bmInfo").hide();
        $(".pgnInfo").hide();
    });

    //show de first element and hide the rest
    $("#pccButton").click(function(){
        $(".pccInfo").show();
        $(".scInfo").hide();
        $(".bmInfo").hide();
        $(".pgnInfo").hide();
    });

    //show de second element and hide the rest
    $("#scButton").click(function(){
        $(".pccInfo").hide();
        $(".scInfo").show();
        $(".bmInfo").hide();
        $(".pgnInfo").hide();
    });

    //show de third element and hide the rest
    $("#bmButton").click(function(){
        $(".pccInfo").hide();
        $(".scInfo").hide();
        $(".bmInfo").show();
        $(".pgnInfo").hide();
    });

    //show de fourth element and hide the rest
    $("#pcnButton").click(function(){
        $(".pccInfo").hide();
        $(".scInfo").hide();
        $(".bmInfo").hide();
        $(".pgnInfo").show();
    });


    
});