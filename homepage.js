import React, { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventList = await eventService.getEvents();
        const recommendedList = await eventService.getRecommendedEvents();
        
        setEvents(eventList);
        setFilteredEvents(eventList);
        setRecommendedEvents(recommendedList);
      } catch (error) {
        console.error('Failed to fetch events', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = async (filters) => {
    try {
      const searchResults = await eventService.searchEvents(filters);
      setFilteredEvents(searchResults);
    } catch (error) {
      console.error('Search failed', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Events</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {recommendedEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Events</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;