
export default function errorHandling(error) {

    if (error.response) {

        return error.response.data.message.toString()


    } else if (error.request) {

        return error.request.toString()

    } else {

        return error.toString()
    }

}