<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" />
      <div class="has-text-centered icons">
        <i class="fa fa-check"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
  props: ["event", "day"],
  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>

<style scoped></style>
