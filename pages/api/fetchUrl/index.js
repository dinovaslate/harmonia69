import { Uploader } from "@/app/CustomHooks/useGetData";
import { v4 } from "uuid";
import imageType from "image-type";
import { lookup } from "mime-types";
export default async function handler(req, res){
    console.log(req.body);
    const response = await fetch(req.body.url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const upload = new Uploader();
    try{
        const {ext} = imageType(buffer);
        const url = await new Promise(async (resolve, reject) => {
            await upload.uploadFileServer(buffer, 'articles/' + v4(), lookup(ext), resolve, reject )
        });
        res.status(200).json({success: 1, file:{url}});
    }catch(error){
        res.status(500).json({error});
    }
}