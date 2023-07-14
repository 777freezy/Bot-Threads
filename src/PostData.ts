const cron = require('node-cron');


export const PostWithData = (dayOfWeeek:string, hour: string):string => {

    const deyWeek: { [key: string]: string } = {
        'domingo': '0',
        'segunda': '1',
        'terça': '2',
        'quarta': '3',
        'quinta': '4',
        'sexta': '5',
        'sábado': '6'
    }

    const [hora, minuto] = hour.split(':')

    return `${minuto} ${hora} * * ${deyWeek[dayOfWeeek.toLowerCase()] || '*'} `
}



