function eKYC(){
    let e="https://liveness.everify.gov.ph",
    t=e=>{try{
        return JSON.parse(e)
    }
    catch{
        return{error:!0,message:"Unable to parse data!"}
    }};
    return{
        start:i=>new Promise((r,n)=>{if(!i.pubKey)throw Error("pubKey is required!");
            let o=document.createElement("div");
            o.style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; height: 100%; width: 100%; z-index: 9999; background: #fff;";
            let s=document.createElement("iframe");
            s.style="height: 100%; width: 100%; border: 0; z-index: 1;",
            s.allow="camera",
            s.src=`${i.host||e}/?t=basic&liveness=0&awst=${i.pubKey}`;
            let a=document.createElement("button");
            a.style="position: absolute; z-index: 10; top: 0; right: 0; color: #000; display: inline-block; background: none; border: none; font-size: 32px; margin-right: 10px; margin-top: 4px;",
            a.textContent="X",
            o.appendChild(s),
            o.appendChild(a),
            document.body.appendChild(o);
            let d=i=>{if(i.origin===e){let n=t(i.data);
                document.body.removeChild(o),r({status:"COMPLETED",result:n})}
                window.removeEventListener("message",d)};
                window.addEventListener("message",d),
                a.addEventListener("click",()=>{document.body.removeChild(o),
                    n({status:"CANCELLED",result:void 0})})})}}