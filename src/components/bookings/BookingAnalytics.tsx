import { AnalyticsSummary } from "@/types/booking.types";
import React, { ReactNode } from "react";
import { IoIosTime } from "react-icons/io";

interface BookingAnalyticsProps {
  analytics: AnalyticsSummary;
}

interface AnalyticBoxProps {
  title: string;
  value: string;
  icon: ReactNode;
}

const BookingAnalytics = ({ analytics }: BookingAnalyticsProps) => {
  console.log("Analytics", analytics);
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AnalyticBox
        value={`${analytics.nextMeetingIn}`}
        title="Next Meeting"
        icon={<IoIosTime />}
      />
      <AnalyticBox
        value={`${analytics.totalToday}`}
        title="Total Today"
        icon={<IoIosTime />}
      />
      <AnalyticBox
        value={`${analytics.totalThisWeek}`}
        title="Total This Week"
        icon={<IoIosTime />}
      />
      <AnalyticBox
        value={`${analytics.totalThisMonth}`}
        title="Total This Month"
        icon={<IoIosTime />}
      />
    </section>
  );
};

function AnalyticBox({ title, value, icon }: AnalyticBoxProps) {
  return (
    <div className="bg-white p-4 shadow-sm border space-y-2 border-gray-100 rounded-xl">
      <h3 className="  font-medium text-darkgray  text-sm md:text-base flex items-center gap-x-2 ">
        {title} {icon}
      </h3>
      <p className=" text-xl md:text-2xl  text-end">{value}</p>
    </div>
  );
}
export default BookingAnalytics;
