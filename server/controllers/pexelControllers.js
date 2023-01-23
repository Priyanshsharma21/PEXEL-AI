import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({apiKey : process.env.OPENAI_API_KEY})
const openAi = new OpenAIApi(configuration)


export const pexelConfirmationController = (req,res)=>{res.send("Hello from PexelAI")}

export const postOpenAiResponse = async(req,res)=>{
    try {
        const { prompt } = req.body;
        const response = await openAi.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = response.data.data[0].b64_json;

        res.status(200).json({photo : image})
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }
    
}
