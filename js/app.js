function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
var pokeAPI = "http://pokeapi.co/api/v2/pokemon/";
var data;
var nextURL;
var prevURL;

// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.
function pokeData(data) {
    nextURL = data.next;
    prevUrl = data.previous;
    $.each( data.results, function (i, pokemon) {
        addPokemon(pokemon.name);
    });// end each
    
}; // end pokeData

$.getJSON(pokeAPI, pokeData);

$(document).ready(function() { 
    // 2.)  Use jQuery to create a click handler for the next and previous buttons.
    $('button').click(function () {
    // 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
    // 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
        $('#pokemon > li').remove();
        var id = $(this).attr('id');
        if ( id == "next"){
        pokeAPI = nextURL;
        } else if (id == "previous") {
            pokeAPI = prevUrl;
        };
        $.getJSON(pokeAPI, pokeData);
    }); // end click
}); // end doc ready    




  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  

/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.
    Be creative, you can style/arrange the detail information however you like! 
*/