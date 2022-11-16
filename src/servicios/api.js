const cloudkey = process.env.REACT_APP_CLOUDINARY_API_KEY
const cloudSkey = process.env.REACT_APP_CLOUDINARY_API_SECRET_KEY
const cloudname='nubenacho'

const mediaApi = `https://${cloudkey}:${cloudSkey}@api.cloudinary.com/v1_1/${cloudname}/resources` 

const image = mediaApi + '/image'
const video = mediaApi + '/video'
const mock = '/db.json' 

export const api = (opcion) =>{
    if(opcion === 'mock') return mock
    if(opcion === 'image') return image
    if(opcion === 'video') return video
}
