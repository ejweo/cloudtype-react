import axios from "axios";

class WaitlistService{

    //local 개발시
    //https://port-0-cloudtype-spring-boot-7e6o2clhxepilm.sel4.cloudtype.app

    getAllGuests() {
        return axios.get(process.env.REACT_APP_API_URL + "/api/guests")
    }

    createGuest(guest) {
        return axios.post(process.env.REACT_APP_API_URL + "/api/guests", guest)
    }

    getGuestById(guestId) {
        return axios.get(process.env.REACT_APP_API_URL + "/api/guests/" + guestId)
    }

    updateGuest(guestId, guest) {
        return axios.put(process.env.REACT_APP_API_URL + "/api/guests/" + guestId, guest)
    }

    deleteGuest(guestId) {
        return axios.delete(process.env.REACT_APP_API_URL + "/api/guests/" + guestId)
    }
}

export default new WaitlistService();
