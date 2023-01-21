import  Counter  from "../../components/counter/counter"
import "./comparison.css"

export default function Comparison() {
    return <div className="comparison">
        <span className="comparison__text">В сравнении</span>
      <Counter count={0}/>
    </div>
}