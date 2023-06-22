import { rest } from "msw";

const helper=()=>
{
    rest.get("http://localhost:3030/scoops",(req,res,ctx)=>
    {
        return res(
            
            ctx.json([
                {name:"Choclate",image:"/images/choclate.png"},
                {
                 name:"Vanilla",image:"/images/vanilla.png"
                }
            ]
            ),
          )
        })
}
export default helper;