import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Footer from "../components/Footer";
import InfiItem from "../components/InfiItem";
import { ItemType } from "../type/itemType";
import getRandomColor from "../util/getRandomColor";
const list = [
    {
        color:"#e2edfd",
        text:"0"
    },
    {
        color:"#1e529f",
        text:"1"
    },
    {
        color:"#91ff9f",
        text:"2"
    },
]
export default function InfiContainer() {
    const [itemList, setItemList] = useState<ItemType[]>(list);
    const targetEl = useRef<HTMLDivElement>(null);

    const option = useMemo(()=>{ 
        return {
            root:null,
            // root: interSectRef.current, //기본 null 
            rootMargin: "20px",
            threshold: 1, // 얼마나 겹쳤을 때 발생하는가
    }},[]);
    const number2 = useRef<number>(0);
    const ObserverCallback = useCallback(([entries]) => {
        const target = entries;
        if (target.isIntersecting) {  //threshold 만큼 보여질경우 true 아닐경우 false로 바로 바뀜 
            console.log("발견!!!"); 
            console.log(itemList);
            setItemList([...itemList,
                {color:getRandomColor(),text:(number2.current+=1).toString()},
                {color:getRandomColor(),text:(number2.current+=1).toString()},
                {color:getRandomColor(),text:(number2.current+=1).toString()},
            ])
        } 
    }, [itemList]);

    useEffect(() => { 
        const observer = new IntersectionObserver(ObserverCallback, option); 
        if (targetEl.current)
            observer.observe(targetEl.current);
        return () => observer.disconnect(); 
    }, [ObserverCallback,option]);

    const aa = () => console.log(targetEl.current)
    return(
        <div>
            <div className="container">
                <div onClick={aa}>
                    aasdsada
                </div>
                {
                    itemList.map(item=>
                        <InfiItem color={item.color} text={item.text}/>
                        )
                }
            </div>
            <Footer ref={targetEl}/>
        </div>
    )
}