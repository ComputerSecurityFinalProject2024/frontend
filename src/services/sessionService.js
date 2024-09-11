import axios from 'axios';
import hashHandler from '../utils/hashHandler';

const API_URL = 'http://localhost:3000';

const axiosInstance = axios.create({  
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const sessionService = {

    // [POST] /sessions
    createSession: async (users, services, permission) => {

    },


    // [PUT] /sessions/:sessionId 
    updateSession: async (sessionId, sessionData) => {

    },

    // [POST] /sessions/:sessionId/users/logIn
    ///Input: sessionId, username, password
    ///Process: Check username in DB and return tgt, save username, tgt, tgs_session_key in localStorage
    ///Output: Message: { tgt, tgs_session_key }
    logInUser: async (sessionId, username, password) => {
        try {
            const res = await axiosInstance.post(`/sessions/${sessionId}/users/logIn`, { username });
            
            const { tgt, message } = res.data.message;
            const tgs_session_obj = hashHandler.decrypt(message, password);

            const [tgs_session_key, timestamp] = tgs_session_obj.split('//');

            if (timestamp - Date.now() >= 0) {
                ///Decrypted message
                localStorage.setItem('username', username);
                localStorage.setItem('tgt', tgt);
                localStorage.setItem('tgs_session_key', tgs_session_key);
            } else {
                ///Expired or unable to decrypt
                throw new Error('Unable to decrypt message or server message expired');
            }
            
            return res.data;
        } catch (error) {
            console.error('Error logging in user:', error);
            throw error;
        }
    },

    // [POST] /sessions/:sessionId/services/:serviceId/authorize
    ///Input: sessionId, serviceId
    ///Process: Check tgt in localStorage and return client_to_server_ticket, client_server_session_key
    ///Output: Message: { client_to_server_ticket, client_server_session_key }
    authorizeUser: async (sessionId, serviceId) => {
        try {
            const tgt = localStorage.getItem('tgt');
            const tgs_session_key = localStorage.getItem('tgs_session_key');
            const username = localStorage.getItem('username');
            const authenticator = hashHandler.encrypt(`${username}//${Date.now() + 1000 * 60 * 60}`, tgs_session_key);
            const message = { tgt: tgt, service_id: serviceId };

            const res = await axiosInstance.post(`/sessions/${sessionId}/services/${serviceId}/authorize`, { message, authenticator });

            const [ client_to_server_ticket, client_server_session_obj ] = res.data.message;
            const [ client_server_session_key, timestamp ] = hashHandler.decrypt(client_server_session_obj, tgs_session_key).split('//');

            if (timestamp - Date.now() >= 0) {
                ///Decrypted message
                localStorage.setItem('client_to_server_ticket', client_to_server_ticket);
                localStorage.setItem('client_server_session_key', client_server_session_key);
            } else {
                ///Expired or unable to decrypt
                throw new Error('Unable to decrypt message or server message expired');
            }

            return res.data;
        } catch (error) {
            console.error('Error authorizing user:', error);
            throw error;
        }
    },

    // [POST] /sessions/:sessionId/services/:serviceId/handshake
    ///Input: sessionId, serviceId
    ///Process: Check client_to_server_ticket in localStorage and return service
    ///Output: Message: { service }
    handshake: async (sessionId, serviceId) => {
        try {
            const username = localStorage.getItem('username');
            const client_server_session_key = localStorage.getItem('client_server_session_key');
            const timestamp = Date.now() + 1000 * 60 * 60;
            const authenticator = hashHandler.encrypt(`${username}//${timestamp}`, client_server_session_key);
            const clientToServerTicket = localStorage.getItem('client_to_server_ticket');

            const res = await axiosInstance.post(`/sessions/${sessionId}/services/${serviceId}/handshake`,
                { client_to_server_ticket: clientToServerTicket, authenticator: authenticator }
            );

            if (res.data.message == timestamp) {
                ///Get service
            }

            return res.data;
        } catch (error) {
          console.error('Error during handshake:', error);
          throw error;
        }
      },
};

export default sessionService;