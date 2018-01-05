function displayFridge() {
  $("#fridge").css("display", "flex");
  $("#ingredients").css("display", "none");
  $("#recipes").css("display", "none");
};

function displayIngr() {
  $("#fridge").css("display", "none");
  $("#ingredients").css("display", "flex");
  $("#recipes").css("display", "none");
};

function displayRecipes() {
  $("#fridge").css("display", "none");
  $("#ingredients").css("display", "none");
  $("#recipes").css("display", "flex");
};
