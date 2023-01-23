var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6ed8b5ce-1a4a-43a1-895c-94c57433ea28","43f6d88b-736a-4b28-a064-7ebcbc0f33fc","7d653362-270b-45bf-8823-78f536f5cd6e","2c31e3b6-ffa0-4fb5-b8c4-6f28e8670d3a","6069957a-c038-40f0-8b77-cc1cf895b65b","1630672d-f6b5-4049-90cc-17d5ac05e400","cd52d234-c823-49b0-849d-94b0868c1ffe","d387fb5f-d40e-41eb-816f-58d1a630cd26","015b0068-1dc1-4068-8c02-4e8a307de084"],"propsByKey":{"6ed8b5ce-1a4a-43a1-895c-94c57433ea28":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"43f6d88b-736a-4b28-a064-7ebcbc0f33fc":{"name":"cars_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":2,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"7d653362-270b-45bf-8823-78f536f5cd6e":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"2c31e3b6-ffa0-4fb5-b8c4-6f28e8670d3a":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"6069957a-c038-40f0-8b77-cc1cf895b65b":{"name":"kid_outline_side_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rJruC4lipIT_eYJo1SCCmhTtfo9TvF.q/category_people/kid_outline_side.png","frameSize":{"x":180,"y":295},"frameCount":1,"looping":true,"frameDelay":2,"version":"rJruC4lipIT_eYJo1SCCmhTtfo9TvF.q","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":295},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rJruC4lipIT_eYJo1SCCmhTtfo9TvF.q/category_people/kid_outline_side.png"},"1630672d-f6b5-4049-90cc-17d5ac05e400":{"name":"gameplayfaces_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"uqj19TeyStK4uCLX36xRtjFAZpeseHv0","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png"},"cd52d234-c823-49b0-849d-94b0868c1ffe":{"name":"blue_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"d387fb5f-d40e-41eb-816f-58d1a630cd26":{"name":"emoji_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png"},"015b0068-1dc1-4068-8c02-4e8a307de084":{"name":"gameplayfaces_09_2","categories":["faces"],"frameCount":1,"frameSize":{"x":391,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:02 UTC","pngLastModified":"2021-01-05 19:03:08 UTC","version":"uqj19TeyStK4uCLX36xRtjFAZpeseHv0","sourceUrl":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png","sourceSize":{"x":391,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/uqj19TeyStK4uCLX36xRtjFAZpeseHv0/category_faces/gameplayfaces_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// declarar variables y objetos sprite

var casaSam = createSprite(25, 200, 50, 200);
var tienda = createSprite(375, 200, 50, 200);
var limite1 = createSprite(200, 100, 400, 2 );
var limite2 = createSprite(200, 300, 400, 2);
var limite3 = createSprite(350, 200, 1, 200);
var sam = createSprite(25,200, 20, 20);
var auto1 = createSprite(120, 110, 15, 15);
var auto2 = createSprite(180, 290, 15, 15);
var auto3 = createSprite(240, 110, 15, 15);
var auto4 = createSprite(300, 290, 15, 15);
var intentos = 0

// Pintar

limite1.shapeColor = "black";
limite2.shapeColor = "black";
limite3.shapeColor = "Yellow"
casaSam.shapeColor = "skyblue";
tienda.shapeColor = "yellow";
sam.shapeColor = "green";
auto1.shapeColor = "red";
auto2.shapeColor = "red";
auto3.shapeColor = "red";
auto4.shapeColor = "red";

// animaciones

auto1.setAnimation("car_red_1");
auto1.scale = 0.2;
auto2.setAnimation("car_black_1");
auto2.scale = 0.2;
auto3.setAnimation("car_green_1");
auto3.scale = 0.2;
auto4.setAnimation("cars_1");
auto4.scale = 0.2;
sam.setAnimation("gameplayfaces_09_2")
sam.scale = 0.06;
// Agregar velocidad a los autos

auto1.velocityY = 6;
auto2.velocityY = -6;
auto3.velocityY = 6;
auto4.velocityY = -6;


function draw() {

  background("white");
  drawSprites();
  textSize(15);
  stroke("blue");
  text("INTENTOS: "+intentos, 160,50);
  
// Crear un efecto de rebote de los carros contra los límites  

auto1.bounceOff(limite1);
auto1.bounceOff(limite2);
auto2.bounceOff(limite1);
auto2.bounceOff(limite2);
auto3.bounceOff(limite1);
auto3.bounceOff(limite2);
auto4.bounceOff(limite1);
auto4.bounceOff(limite2);

//Agregar la condición para hacer que Sam se mueva de izquiera a 
if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }


//Agregar la condición para regresar a Sam a su posición original si toca un auto
// y para incrementar el número de intentos

 if(
     sam.isTouching(auto1)||
     sam.isTouching(auto2)||
     sam.isTouching(auto3)||
     sam.isTouching(auto4))
  {
     playSound("assets/category_collect/collect_item_bling_1.mp3", false);
     sam.x = 20;
     sam.y = 190;
     intentos = intentos + 1;
  }
  
  if (sam.isTouching(tienda)) {
    auto1.destroy();
    auto2.destroy();
    auto3.destroy();
    auto4.destroy();
   
    text("¡GANASTE!", 160, 200);
  }
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
