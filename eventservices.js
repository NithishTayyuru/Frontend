import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/event';

export const eventService = {
  async getEvents() {
    const response = await axios.get(`${BASE_URL}/list`, {
      withCredentials: true
    });
    return response.data;
  },

  async getEventDetails(eventId) {
    const response = await axios.get(`${BASE_URL}/${eventId}`, {
      withCredentials: true
    });
    return response.data;
  },

  async searchEvents(filters) {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: filters,
      withCredentials: true
    });
    return response.data;
  },

  async getRecommendedEvents() {
    const response = await axios.get(`${BASE_URL}/recommendation`, {
      withCredentials: true
    });
    return response.data;
  }
};

export const userEventService = {
  async getRegisteredEvents() {
    const response = await axios.get('http://localhost:3000/api/user/events', {
      withCredentials: true
    });
    return response.data;
  },

  async registerForEvent(eventId) {
    const response = await axios.post('http://localhost:3000/api/user/events/register', 
      { eventId }, 
      { withCredentials: true }
    );
    return response.data;
  },

  async unregisterFromEvent(eventId) {
    const response = await axios.post('http://localhost:3000/api/user/events/remove', 
      { eventId }, 
      { withCredentials: true }
    );
    return response.data;
  }
};