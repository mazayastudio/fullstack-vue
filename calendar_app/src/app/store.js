import { seedData } from "@/app/seed";

export const store = {
  state: {
    seedData,
  },
  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === eventDetails
    );
    eventObj.edit = true;
  },
  resetEditOfAllEvents() {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    // Find the day object
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    // Find the specific event
    const evenObj = dayObj.events.find(
      (event) => event.details === originalEventDetails
    );
    // Set the event details to new details
    // and turn off editing
    eventObj.details = new EventDetails();
    eventObj.edit = false;
  },
};
