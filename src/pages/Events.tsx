import EventCard from"../components/EventCard";
import TicketCounter from"../components/TicketCounter";
import {useEvents }from"../hooks/useEvnets";

function Events(){
const{events, loading, error} = useEvents();
if(loading)return <p>Loading events..</p>
    return(
        <section>
            <h2>Events</h2>
            <p>Our events will appear here</p>
            {events.map(event => (
                <div key={event.id}>
    <EventCard
        key={event.id}
        title={event.title}
        location={event.location}
        price={event.price}
    />
))}

            </section>
    );
}

export default Events;