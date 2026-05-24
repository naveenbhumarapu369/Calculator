import { useState } from "react";
import "./Calc.css";
export default function Calc(){
    let opr = ['/','*','+','-','%','.'];
    let [txt,setTxt] = useState("");
    function appnd(e) {
        const value = e.target.value;
        const lastChar = txt[txt.length - 1];
        if(opr.includes(value)&&opr.includes(lastChar)){
            setTxt(txt.substring(0,txt.length-1)+value);
            return;
        }
        setTxt(txt+value);
    }
    function AC(){
        setTxt("");
    }
    function DEL(){
        setTxt(txt.substring(0,txt.length-1));
    }
    function evaluateExp() {
        try {
            setTxt(eval(txt).toString());
        } catch {
            setTxt("Error");
        }
    }
    return(
        <>
            <h1>Calculater Using React</h1>
            <div className="calc">
                <div className="inp"><input value={txt}/></div>
                <div className="btns">
                    <div>
                        <button onClick={AC}>AC</button>
                        <button onClick={DEL}>DEL</button>
                        <button value="%" onClick={appnd}>%</button>
                        <button value="/" onClick={appnd}>/</button>
                    </div>
                    <div>
                        <button value="7" onClick={appnd}>7</button>
                        <button value="8" onClick={appnd}>8</button>
                        <button value="9" onClick={appnd}>9</button>
                        <button value="*" onClick={appnd}>*</button>
                    </div>
                    <div>
                        <button value="4" onClick={appnd}>4</button>
                        <button value="5" onClick={appnd}>5</button>
                        <button value="6" onClick={appnd}>6</button>
                        <button value="-" onClick={appnd}>-</button>
                    </div>  
                    <div>
                        <button value="1" onClick={appnd}>1</button>
                        <button value="2" onClick={appnd}>2</button>
                        <button value="3" onClick={appnd}>3</button>
                        <button value="+" onClick={appnd}>+</button>
                    </div>
                    <div>
                        <button value="0" onClick={appnd}>0</button>
                        <button value="." onClick={appnd}>.</button>
                        <button onClick={evaluateExp}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}