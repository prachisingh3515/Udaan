import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../constants';
import './EventDetails.css';
import {
  MapPin, Calendar, User, Info, Tag, Users, IndianRupee, HandHelping
} from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) return <div className="event-details"><h2>Event Not Found</h2></div>;

  const details = [
    { icon: <MapPin size={20} />, label: "Location", value: event.location },
    { icon: <Calendar size={20} />, label: "Date", value: event.date },
    { icon: <User size={20} />, label: "Organizer", value: event.organizer },
    { icon: <Info size={20} />, label: "Description", value: event.description },
    { icon: <Tag size={20} />, label: "Category", value: event.category },
    { icon: <Users size={20} />, label: "Participants", value: event.participants },
    { icon: <IndianRupee size={20} />, label: "Revenue", value: `₹${event.revenue}` },
    { icon: <HandHelping size={20} />, label: "Volunteers Needed", value: event.volunteersNeeded ? 'Yes' : 'No' },
  ];

  return (
    <div className="event-details">
      <img src={event.img} alt={event.title} />
      <div className="event-info">
        <h1>{event.title}</h1>
        <div className="event-meta">
          {details.map(({ icon, label, value }, idx) => (
            <div className="event-detail" key={idx}>
              <span className="icon">{icon}</span>
              <div className="text">
                <strong>{label}:</strong> {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
