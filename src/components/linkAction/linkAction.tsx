import Counter from "../counter/counter";
import Sprite from "../sprite/sprite";
import "./linkAction.css";

type PropsType = {
    spriteYOffSet: number | null,
    text: string,
    href?:string,
    count?:number,
    className?:string
}


export default function LinkAction({ spriteYOffSet, text,href,count,className }: PropsType) {
    return <div className={className + " link-action"}>
        {spriteYOffSet !== null
            ? <Sprite yOffset={spriteYOffSet} />
            : void 0}
        <a href={href} className="link-action__text">{text}</a>
        <Counter count={count || 0} /> {/*TODO: Remove '||' when make rest*/}
    </div>
}