
// export function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// export function calculateWinner(squares) {
//   const lines = [
//     [0,1,2],
//     [1,2,3],
//     [4,5,6],
//     [5,6,7],
//     [8,9,10],
//     [9,10,11],
//     [12,13,14],
//     [13,14,15],
//     [0,4,8],
//     [4,8,12],
//     [1,5,9],
//     [5,9,13],
//     [2,6,10],
//     [6,10,14],
//     [3,7,11],
//     [7,11,15],
//     [4,9,13],
//     [0,5,10],
//     [5,10,15],
//     [1,6,11],
//     [8,5,2],
//     [12,9,6],
//     [9,6,3],
//     [13,10,7],


//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

//============================

// class classShape{

//     creteCircle(){
//         let dom = ReactDOM.findDOMNode(this.refs.canvas);
//         let stage = new createjs.Stage(dom);

//         let circle = new createjs.Shape();

//         circle.graphics
//               .beginStroke(219, 26, 219)
//               .beginLinearGradientFill(["pink", "red"], [0, 1], 0, 20, 0, 600)
//               .drawCircle(350, 300, 200)

//         stage.addChild(circle);
//         stage.update();
//     }
// }

// export default classShape;

export function mainCircle(){

    let mainContainer = new createjs.Container();
    mainContainer.name = "main-container";
    let textContainer = new createjs.Container();
    textContainer.name = "text-container";


    let circle = new createjs.Shape();
    let centerStar = new createjs.Shape();
    let arcky = new createjs.Shape();

    circle.graphics
      .beginStroke('black')
      .beginLinearGradientFill(["red","blue"], [0, 1], 0, 10, 0, 0)
      .drawCircle(300, 200, 200)
    centerStar.graphics
      .beginFill('gold')
      .drawPolyStar(300, 200, 20, 5, 2, -90);



    let angle = 0;
    let ctr = 0;

    while (angle <= 360) {

      let thisArc = 26; 
      let startAngle = angle * Math.PI/180;
      let endAngle = Math.min(360, angle+thisArc)*Math.PI/180;
      arcky.graphics
        .f(createjs.Graphics.getRGB(Math.random()*0xFFFFFF))
        .moveTo(0,0)
        .arc(0,0,190,startAngle,endAngle);

      let retText = repeatTxt(angle , ctr, arcky);

      arcky.x=300;
      arcky.y=200;
      angle += thisArc;
      ctr++;

      textContainer.addChild(retText);
    }

    function repeatTxt(angle, i ){
        const name = ['jerard','mark','clarky','enan','raven','robin','PowerPrince', 'ein' , 'kevin', 'Bong', 'Chris', 'Jemo' , 'Andrew' , 'putra'];
        let text = new createjs.Text("               "+name[i], "20px Bold", "black");
        text.x = 300;
        text.y = 200;
        text.width = 100;
        text.rotation = angle+6;

        return text;
    }

    mainContainer.addChild(circle , arcky ,textContainer, centerStar)   

    return mainContainer;  
    
}

export function buttonStop(){

    let buttonContainer = new createjs.Container();
    let text = new createjs.Text('SPIN!!!', "15px Bold", "white");
    buttonContainer.name = "button-container";

    let button = new createjs.Shape();

    button.graphics
      .beginStroke('black')
      .beginFill('gray')
      .drawRect(650, 300, 60, 20)
    text.x = 655;
    text.y = 300;  

    buttonContainer.addChild(button, text);  

    return buttonContainer;    

}

export function panalo(){

    let nanaloContainer = new createjs.Container();
    nanaloContainer.name = "panalo-container";

    let button = new createjs.Shape();

    button.graphics
      .beginFill('gold')
      .beginStroke('black')
      .moveTo(0,0)
      .arc(0,0,190,0,0.50);

    button.rotation = 255;
    button.x=250;
    button.y=70;   

    nanaloContainer.addChild(button);  

    return nanaloContainer; 

}

export function createStar(){


  const mycolor = ['white','yellow','green','red','blue','skyblue','orange','violet','gray','yellowgreen'];
  let star = new createjs.Shape();
  let randomStar = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  let position = Math.floor((Math.random()*8)*100);
  let randomColor = Math.floor(Math.random()*10);

  star.graphics
    .beginFill(mycolor[randomColor])
    .drawPolyStar(position, 0, 8, randomStar, 0.9, -90);

  return star;  
}





