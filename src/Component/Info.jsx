import "./Info.css"

import infos from "./info.json" 
import Divider from "./Divider"

function Info() {
    return (
        <div className="Info" id="INF">
            <Divider/>
            {infos.map((info) => (
                <div className="infoGroup">
                    <div className="infLeft">
                        <h2>{info.title}</h2>
                        <p>{info.desc}</p>
                    </div>
                    <div className="infRight" style={{backgroundImage: `url(${info.imgUrl}`}}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Info