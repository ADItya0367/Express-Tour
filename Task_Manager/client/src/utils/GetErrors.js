export default function GetErrors(error) {
    const msg = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return msg;
}