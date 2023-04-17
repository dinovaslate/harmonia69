import { Uploader } from "@/app/CustomHooks/useGetData";
import fs from 'fs';
import formidable from "formidable";
export const config = {
    api: {
      bodyParser: false
    }
  };
const post = async (req, res) => {
    const form = new formidable.IncomingForm();
    const prom =  await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form', err);
                return res.status(500).json({ error: 'Error parsing form' });
              }
          
              const file = files.image;
              const fileName = file.originalFilename;
              const filePath = file.filepath;
          
              fs.readFile(filePath, async (err, data) => {
                if (err) {
                  console.error('Error reading file', err);
                  return res.status(500).json({ error: 'Error reading file' });
                }
          
                const buffer = Buffer.from(data);
          
                const errorHanlder = (err) => {
                    reject({err})
                }
                const onDone = (url) => {
                    resolve({success: 1, file: {url}});
                }
               if(err) errorHanlder(err);
               console.log(files.image);
                const uploader = new Uploader();
                await uploader.uploadFileServer(buffer, 'articles/' + fileName, file.mimetype, onDone, errorHanlder);
            })
        });
    });
    return prom;
}

export default async function handler(req, res){
    const obj = await post(req, res);
    if(obj['err']){
        res.status(500).json(obj)
    }
    res.status(200).json(obj);
}