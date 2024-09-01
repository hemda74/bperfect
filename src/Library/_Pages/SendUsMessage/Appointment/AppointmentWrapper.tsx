import React from 'react';
import { AppFormAr, AppFormEN } from "../../../../../messages/data/ContactData";
import Appointment from "./Appointment";
import { Locale } from '@/Library/Globals';

interface AppointmentWrapperProps {
    locale: Locale;
}

const AppointmentWrapper: React.FC<AppointmentWrapperProps> = ({ locale }) => {
    const t = locale.locale === "en" ? AppFormEN : AppFormAr;

    return (
        <Appointment
            locale={locale}
            t={t}
        />
    );
};

export default AppointmentWrapper;
