"use client";

import React, { useState, useEffect } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewDay } from "@schedule-x/calendar";
import { createEventsServicePlugin,  } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";
import moment from "moment";

type SlotItem = {
  id: string | number;
  title: string;
  start: string;
  end: string;
  resource: string;
};

type BookingCalendarProps = {
  slots: SlotItem[];
};

const BookingCalendar: React.FC<BookingCalendarProps> = ({ slots }) => {
  const [eventsService] = useState(() => createEventsServicePlugin());

  console.log("slots", slots);

  const calendarApp = useCalendarApp({
    views: [
      createViewDay(),
        // createViewWeek(),
        
      //   createViewMonthAgenda(),
    ],
    events: slots.map((slot, idx) => ({
      id: idx,
      title: "Available",
      start: moment(slot.start).format("YYYY-MM-DD HH:mm"),
      end: moment(slot.end).format("YYYY-MM-DD HH:mm"),
    })),
    plugins: [eventsService],
    callbacks: {
      onRender: () => eventsService.getAll(),
    },
    
  });

  useEffect(() => {
    console.log('eventsService.getAll()', eventsService.getAll());
  }, [eventsService, slots]);

  return (
    <div className="sx-react-calendar-wrapper w-full h-[700px]">
      <ScheduleXCalendar calendarApp={calendarApp}  />
    </div>
  );
};

export default BookingCalendar;
