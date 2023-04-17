export const config = {
    api: {
      bodyParser: false
    }
};

export default function handler(req, res){
    console.log(req.body.imageUrl);
    res.status(200).json({location: 'Hello World'})
}