import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// import { Configuration, OpenAIApi } from 'openai';
import OpenAIApi from 'openai';
// import * as OpenAI from 'openai';



dotenv.config();
const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: "Is this working? "
    })
});

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "user",
                "content": `${prompt}`
              }
            ],
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
          });
      

          res.status(200).send({
            
            bot: response.choices[0].message.content
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: error
        })
    }
})

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'))



