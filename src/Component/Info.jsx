import "./Info.css"
import Divider from "./Divider"
import Div_btm from "./Div_btm";

import infos from "./../assets/info.json"


function Info() {
    return (
        <div className="Info" id="INF">
            <Divider/>
            {infos.map((info) => (
                <div key={info.key} className="infoGroup">
                    <div className="infLeft">
                        <h2>{info.title}</h2>
                        <p>{info.desc}</p>
                    </div>
                    <div className="infRight" style={{backgroundImage: `url(${info.imgUrl}`}}>
                    </div>
                </div>
            ))}
            <Div_btm/>
        </div>
    )
}

export default Info