import {siteConst} from "./siteConst";
import {siteBarConst} from "./sideBarConst";

export class App {
    constructor(model) {
        this.model = model
    }

    init(){
        const site_cont = new siteConst('#site-content')
        const addBlocks = newBlock =>{
            this.model.push(newBlock)
            site_cont.render(this.model)
        }
        new siteBarConst('#s-bar',addBlocks)
        site_cont.render(this.model)
    }
}