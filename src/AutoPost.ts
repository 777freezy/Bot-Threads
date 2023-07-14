import { threadsAPI } from "./start"

let data = new Date();

export const Message = async (message: string, image?: string) => {

    if (image?.trim() !== '') {
        await threadsAPI.publish({
            text: message,
            image: image,

        })
    } else {
        await threadsAPI.publish({
            text: message,

        })
    }
}



