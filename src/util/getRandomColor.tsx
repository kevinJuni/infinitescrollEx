export default function getRandomColor(){
    let color = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    return color;
}